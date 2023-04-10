import './App.css';
import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import ESP8266 from './ESP8266';
import ImageDisplay from './ImageDisplay';
import WidgetDisplay from './WidgetDisplay';
import WeatherData from './WeatherData';
import WeatherWidget from './WeatherWidget';

function App() {

  const [sliderValue, setSliderValue] = useState(0);
  const [widValue, setWidValue] = useState(0);
  const [weatherValue, setWeatherValue] = useState(0);

  const handleSliderChange = (value) => {
    console.log('Slider value:', value);
    setSliderValue(value);

    if (value >= 10 && value <= 14) {
      setWidValue(1);
      setWeatherValue(4);
    }
    else if (value > 14 && value <= 18) {
      setWidValue(2);
      setWeatherValue(4);
      if (value > 15) {
        setWeatherValue(3);
      }
    }
    else {
      setWidValue(3);
      if ((value > 5 && value < 10) || (value > 18 && value < 20)) {
        setWeatherValue(2);
      }
      else {
        setWeatherValue(1);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <ImageDisplay code={sliderValue} />
          <div className="rightColumn">

            <div className="topRightSubRow">
              <WidgetDisplay value={widValue} />
              <WeatherWidget value={weatherValue}/>
              <WeatherData hour={sliderValue} />
            </div>

            <h1>Sun Break Timeline </h1>
            <Slider min={0} max={24} initialValue={0} onChange={handleSliderChange} />
          </div>
        </div>
      </header>
      <ESP8266 sliderValue={sliderValue} />
    </div>
  );
}

export default App;
