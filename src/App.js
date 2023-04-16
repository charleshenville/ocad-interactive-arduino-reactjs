import './App.css';
import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import ESP8266 from './ESP8266';
import ImageDisplay from './ImageDisplay';
import WeatherData from './WeatherData';
import WeatherWidget from './WeatherWidget';
import MenuBar from './MenuBar';
import GradExTxt from './GradExTxt';
import LeftMostTxt from './LeftMostTxt';
import PhoneSVG from './PhoneSVG';
import Button from './Button';
import DemoWidget from './DemoWidget';
import Vector from './Vector';
import Timer from './Timer';

function App() {

  const [sliderValue, setSliderValue] = useState(0);
  const [sliderDisabled, setSliderDisabled] = useState(false);
  const [weatherValue, setWeatherValue] = useState(0);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [demoVisible, setDemoVisible] = useState(false);
  const [demoIndex, setDemoIndex] = useState(0);
  const [thumbPos, setThumbPos] = useState(0);
  const [toESP, setToESP] = useState(0);
  const [weatherString, setweatherString] = useState('Night');
  const [lastButton, setlastButton] = useState(4);
  const [isTimer, setIsTimer] = useState(false);
  const [timerVal, setTimerVal] = useState(74);

  function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  const handleSliderChange = (value) => {
    console.log('Slider value:', value);
    setSliderValue(value);
    setThumbPos((value / 25) * 100 - value * 0.1);

    if (value >= 10 && value < 14) {
      setWeatherValue(4);
      setweatherString('Full Sun');
    }
    else if (value >= 14 && value < 18) {
      setWeatherValue(4);
      if (value > 15) {
        setWeatherValue(3);
        setweatherString('Partial Sun');
      }
    }
    else {
      if ((value > 5 && value < 10) || (value >= 18 && value < 20)) {
        setWeatherValue(2);
        let parse = value < 10 ? 'Sunrise' : 'Sunset'
        setweatherString(parse);
      }
      else {
        setWeatherValue(1);
      }
    }
  };

  async function countdown(){

    let count = 0;
    let current = 0;
    setTimerVal(74);
    while(count<74){

      current = Math.abs(74-count);
      setTimerVal(current);
      console.log(count);
      await wait(1000);
      count=count+1;

    }
    
  }

  async function demoDiff(){
    console.log("demodiffn");
    setweatherString('Night');
    setButtonsDisabled(true);
    setIsTimer(true);

    console.log(lastButton);
    if (lastButton == 1 || lastButton == 4) {
      setToESP(4);
      await wait(500);
    }
    
    if (lastButton == 2 || lastButton == 3) {
      setToESP(4);
      await wait(1000);
    }


    let i = 1;
    while (i < 25) {

      if (i < 24) {
        handleSliderChange(i);
      }
      if ([3, 10, 13, 14, 17, 18, 20].includes(i)) {
        setDemoVisible(true);
      }
      else {
        setDemoVisible(false);
      }
      console.log(i);
      if (i == 3) {
        setDemoIndex(0);
        await wait(5000);
        setToESP(1);
      }
      else if (i == 10) {
        setDemoIndex(1);
        await wait(2000);
      }
      else if (i == 13) {
        setDemoIndex(2);
        await wait(11000);
        setDemoIndex(3);
        await wait(12000);
      }
      else if (i == 14) {
        setDemoIndex(4);
        await wait(4000);
      }
      else if (i == 17) {
        setDemoIndex(5);
        await wait(11000);
        setDemoIndex(6);
        await wait(12000);
      }
      else if (i == 18) {
        setDemoIndex(7);
        await wait(2000);
      }
      else if (i == 20) {
        setDemoIndex(8);
        await wait(2000);
      }

      else if (i > 10 && i <= 16) {
        await wait(2000);
      }
      else {
        await wait(400);
      }
      i = i + 1;
    }

    handleSliderChange(0);
    setweatherString('Night');
    setlastButton(1);
    setIsTimer(false);
    setButtonsDisabled(false);
  }
  async function handleDemoClick() {

    await Promise.all([demoDiff(), countdown()]);

  }
  async function handlePeakClick() {
    setButtonsDisabled(true);
    setToESP(2);
    handleSliderChange(11);
    await wait(1000);
    setlastButton(2);
    setButtonsDisabled(false);
  }
  async function handleLastClick() {
    setButtonsDisabled(true);
    setToESP(3);
    handleSliderChange(16);
    await wait(1000);
    setlastButton(3);
    setButtonsDisabled(false);
  }
  async function handleOffClick() {
    setButtonsDisabled(true);
    setToESP(4);
    handleSliderChange(0);

    await wait(1000);
    setlastButton(4);
    setButtonsDisabled(false);
  }

  return (
    <div className="App">

      <MenuBar />

      <header className="App-header">

        <div className="container">

          <div className='leftColumn'>
            <LeftMostTxt />

            <div>
              <div className="buttonBox">

                <div className='middleColumn'>
                  <svg width="50" height="65" viewBox="0 0 69 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69 40L3.87733e-06 79.8372L7.36001e-06 0.162827L69 40Z" fill="#D9D9D9" />
                  </svg>
                  <div className='demoOverlay'>
                    <Button index='demo' onClick={handleDemoClick} disabled={buttonsDisabled}/>
                  </div>
                </div>

                <Button index='peak' onClick={handlePeakClick} disabled={buttonsDisabled} />
                <Button index='last' onClick={handleLastClick} disabled={buttonsDisabled} />
                <Button index='off' onClick={handleOffClick} disabled={buttonsDisabled} />
              </div>

              <div className="buttonText">
                <Timer active={isTimer} secsRemain={timerVal}/>
                <div>Peak</div>
                <div>Last Call</div>
                <div>Off</div>
              </div>
            </div>

            <div className="demoRow">

              <div className='justifyRight'>
                <DemoWidget index={demoIndex} visible={demoVisible} />
              </div>
              <div className='justifyRight'>
                <Vector demoVisible={demoVisible} />
              </div>

            </div>


          </div>

          <div className="middleColumn">
            <PhoneSVG width="475" height="900" />
            <div className='phoneOverlay'>

              <div className="topRightSubRow">

                <WeatherData hour={sliderValue} />

                <div className='weather'>
                  <WeatherWidget value={weatherValue} />
                  <div style={{ color: "#3D3D3D", fontWeight: "bold" }}>{weatherString}</div>
                </div>

              </div>

              <div className='phoneSub'>
                <ImageDisplay code={sliderValue} />
                <div className='timelineTxt'>
                  <h1>Sun Break Timeline</h1>
                </div>
                <Slider min={0} max={24} initialValue={0} onChange={handleSliderChange} disabled={sliderDisabled} thumbPosition={thumbPos} />
              </div>


            </div>

          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '10%' }}>
            <GradExTxt />
          </div>

        </div>
      </header>
      <ESP8266 sliderValue={toESP} />
    </div>
  );
}

export default App;
