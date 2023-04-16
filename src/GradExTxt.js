import React, { useState, useEffect } from 'react';
import styles from './text-styles.css'

function GradExTxt() {

    return (

        <div>
            
            <div style={{fontSize: '36px', color: '#BA754A'}}>The Breakdown</div>
            <div style = {{fontSize: "20px", fontFamily: "General Sans"}}>Sun Break recommendations are calculated based on ideal sun exposure times that regulate the circadian rhythms of each sleeping chronotype.</div>
            <h1></h1>
            <div style = {{fontSize: "20px", fontFamily: "General Sans"}}>In this demo, we follow the Dolphin, aka the insomniac using historical weather data to simulate a real-time use-case.</div>
        </div>

    );

}

export default GradExTxt;