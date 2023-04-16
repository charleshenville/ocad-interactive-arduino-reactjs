import React, { useState, useEffect } from "react";

function ESP8266(props) {

    const { sliderValue } = props;

    useEffect(() => {
        sendValue();
    }, [sliderValue]);

    function sendValue() {
        // Use fetch() to send an HTTP request to the ESP8266 module
        fetch(`http://172.20.10.6/sld?sliderValue=${sliderValue}`, { mode: 'no-cors' })
            .then((response) => {
                console.log("Sent Slider Value to ESP8266.")
            })
            .catch((error) => {
                console.error("Error sending value:", sliderValue, error);
            });
    }

    return null;
}

export default ESP8266;