import React, { useState, useEffect } from 'react';
import styles from './text-styles.css'

function GradExTxt() {

    return (

        <div className={styles.container}>
            <div style={{fontSize: '36px', color: '#BA754A'}}>GradEx May 13, 2022</div>
            <div style = {{fontSize: "26px", fontFamily: "General Sans"}}>Scroll through the <span style={{color: '#BA754A', fontWeight: 'bold'}}>interactive timeline</span> to experience a day in the life of the SunSet Lamp</div>
            <h1 style={{fontSize:"150px"}}></h1>
            <div style={{fontSize: '36px', color: '#BA754A'}}>The Breakdown</div>
            <div style = {{fontSize: "20px", fontFamily: "General Sans"}}>Sun Break recommendations are calculated based on ideal sun exposure times that regulate the circadian rhythms of each sleeping chronotype.</div>
            <div style = {{fontSize: "20px", fontFamily: "General Sans"}}>In this demo, we follow the Dolphin, aka the insomniac.</div>
        </div>

    );

}

export default GradExTxt;