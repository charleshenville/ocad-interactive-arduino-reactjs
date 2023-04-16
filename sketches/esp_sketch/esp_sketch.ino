#include <ESP8266WiFi.h>        // Include the Wi-Fi library
#include <WiFiClient.h>
#include <ESP8266WebServer.h>

const char* ssid     = "SadeHuh";
const char* password = "slimmsade21";

// const char* ssid     = "samuraiwifi";
// const char* password = "A336A379DE6F"; 


ESP8266WebServer server(80);

void handleValueRequest() {
  Serial.println("Handling value request");
  String valueStr = server.arg("sliderValue");
  // Serial.print("Received value: ");
  // Serial.println(valueStr);
  int value = valueStr.toInt();
  // Serial.print("Parsed value: ");
  Serial.println(value);
  server.send(200, "text/plain", "Value received: " + valueStr);
}

void setup() {
  Serial.begin(115200);         // Start the Serial communication to send messages to the computer
  delay(10);
  Serial.println('\n');
  
  WiFi.begin(ssid, password);             // Connect to the network
  Serial.print("Connecting to ");
  Serial.print(ssid); Serial.println(" ...");

  int i = 0;
  while (WiFi.status() != WL_CONNECTED) { // Wait for the Wi-Fi to connect
    delay(1000);
    Serial.print(++i); Serial.print(' ');
  }

  Serial.println('\n');
  Serial.println("Connection established!");  
  Serial.print("IP address:\t");
  Serial.println(WiFi.localIP());         // Send the IP address of the ESP8266 to the computer

  server.on("/sld", handleValueRequest);
  server.begin();
  Serial.println("Server started");
}

void loop() 
{ 
  server.handleClient();
}