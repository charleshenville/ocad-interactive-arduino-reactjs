#include <Adafruit_NeoPixel.h>

#define PIN 6
#define NUMPIXELS 24
#define TIME_PER_PERCENT 100
#define FLASHSLO 0
#define AMT 1
#define TIME_PER_HALFHOUR 1000

// #ifdef __AVR__
// #include <avr/power.h>
// #endif

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

double rawList[] = {0.0, 0.0, 0.0, 0.0, 0.029, 0.44, 0.97, 0.87, 0.478, 0.014, 0.009, 0.0, 0.0};
                // [0, 0, 0, 0, 0, 50Y, 100Y, 100P, 50P, 0, 0, 0, 0]


void iterateThruPercent(int numList, int maxPercent, int last, int * lastColour);
void fadeToColor(uint32_t c1, uint32_t c2, int wait);
void initYellow(int intensity);
void initPurple(int intensity);

void iterateThruPercent(int numList, int maxPercent, int last, int * lastColour){

    int flag = 1;
    if(last > maxPercent){
      flag=-1;
    }
    else if(last==maxPercent){
      delay(50*TIME_PER_PERCENT);
      return;
    }

    if(numList <=6){

        if(*lastColour !=1){fadeToColor(pixels.Color((int)(((double)(last)/100)*252), (int)(((double)(last)/100)*124), (int)(((double)(last)/100)*214)), 
                                        pixels.Color((int)(((double)(last)/100)*250), (int)(((double)(last)/100)*155), (int)(((double)(last)/100)*0)), 60);}
        (*lastColour) = 1;

        for(int per = last; ((per < maxPercent && flag == 1) || (per > maxPercent && flag ==-1)); per+=flag)
        {
            int volume = ((double)(255)*((double)per/(double)100));
            initYellow(volume);
            delay(TIME_PER_PERCENT);
        }
        return;

    }
    else{

        if(*lastColour != 2){fadeToColor(pixels.Color((int)(((double)(last)/100)*250), (int)(((double)(last)/100)*155), (int)(((double)(last)/100)*0)), 
                                        pixels.Color((int)(((double)(last)/100)*252), (int)(((double)(last)/100)*124), (int)(((double)(last)/100)*214)), 60);}
        (*lastColour) = 2;

        for(int per = last; (((per < maxPercent) && (flag == 1)) || ((per > maxPercent) && (flag ==-1))); per+=flag)
        {
            int volume = ((double)(255)*((double)per/(double)100));
            initPurple(volume);
            delay(TIME_PER_PERCENT);
        }
        return;
    }
}

void fadeToColor(uint32_t c1, uint32_t c2, int wait){

  int r1 = (c1 >> 16) & 0xFF;
  int g1 = (c1 >> 8) & 0xFF;
  int b1 = c1 & 0xFF;

  int r2 = (c2 >> 16) & 0xFF;
  int g2 = (c2 >> 8) & 0xFF;
  int b2 = c2 & 0xFF;

  for (float t = 0.0; t < 1.0; t += 0.01) {
    int r = (int)(r1 + t * (r2 - r1));
    int g = (int)(g1 + t * (g2 - g1));
    int b = (int)(b1 + t * (b2 - b1));

    for (int i = 0; i < NUMPIXELS; i++) {
      pixels.setPixelColor(i, r, g , b);
    }

    pixels.show();
    delay(wait);
  }
}

void initYellow(int intensity){
  int R=250;
  int G=155;
  int B=0;

  for(int i =0 ; i<NUMPIXELS; i++){

    pixels.setPixelColor(i, R, G, B);
    pixels.setBrightness(intensity);
    pixels.show();

  }
}

void initPurple(int intensity){
  int R=252;
  int G=124;
  int B=214;

  for(int i =0 ; i<NUMPIXELS; i++){

    pixels.setPixelColor(i, R, G, B);
    pixels.setBrightness(intensity);
    pixels.show();

  }
}

void dimBrighten(int waitDim, int direction, int volume, int colour){
  //dim until off if direction is -1
  //brighten to colour if 1

  volume = ((double)(255)*((double)volume/(double)100));
  if(direction < 0)
  {
    for (int brightness = volume; brightness >= 0; brightness--) 
    {
      if(colour == 1){
        initYellow(brightness);
      }
      else{
        initPurple(brightness);
      }
      pixels.show();
      delay(waitDim);
    }
  }
  else{
    for (int brightness = 0; brightness <= volume; brightness++) {
      
      if(colour == 1){
        initYellow(brightness);
      }
      else{
        initPurple(brightness);
      }
      pixels.show();
      delay(waitDim);
    }
  }
}

void thruHalfHours(int i, int last, int lastColour, int numFlashes)
{
  
  for(int k = 0; k<numFlashes; k++){
    dimBrighten(FLASHSLO, -1, last, lastColour);
    dimBrighten(FLASHSLO, 1, last, lastColour);
  }
  delay(TIME_PER_HALFHOUR);
      
}
void setup()
{
  // Open serial communications and wait for port to open:
  Serial.begin(115200);
  while (!Serial) {
  ; // wait for serial port to connect. Needed for native USB port only
  }
  Serial.println("Serial Connection Established!");
  pixels.begin();
  for(int i =0 ; i<NUMPIXELS; i++){
    pixels.setPixelColor(i, 0, 0, 0);
    pixels.show();
  }
}

int last = 0;
int lastColour = 1;
int lastIndex = 12;
void loop()
{

    int received = 0;
    int i = 0;
    int flashflag = 0;
    int mod = 0;
    int genuineIndex = 0;
    
    if (Serial.available()) {
        // Serial.write(Serial.read());
        int j = Serial.parseInt();
      
        if(j!=0){
          genuineIndex = j;
          i=(j/2);
        }

        Serial.println(j);    
        received = 1;
    }

    if(i>0 && i<=13 && received==1 && lastIndex != i)
    {
      if (rawList[i] >= 0.3 && rawList[i] <= 0.5)
      {
        iterateThruPercent(i, 50, last, &lastColour);
        last = 50;

        if((genuineIndex==13||genuineIndex==17)&&flashflag == 0){
          thruHalfHours(i, last, lastColour, 2);
          delay(TIME_PER_HALFHOUR);
          thruHalfHours(i, last, lastColour, 4);
          flashflag == 1;
        }

        lastIndex = i;
        
      }
      else if (rawList[i] > 0.5)
      {
        iterateThruPercent(i, 100, last, &lastColour);
        last = 100;

        if((genuineIndex==13||genuineIndex==17)&&flashflag == 0){
          thruHalfHours(i, last, lastColour, 2);
          delay(TIME_PER_HALFHOUR);
          thruHalfHours(i, last, lastColour, 4);
          flashflag == 1;
        }

        lastIndex = i;
        
      }
      else
      {
        if(last != 0){
          dimBrighten(FLASHSLO, -1, last, lastColour);
          last = 0;
          lastIndex = i;
        }
      }
    }
}