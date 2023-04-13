import React, { useState, useEffect } from 'react';
import styles from './text-styles.css'

function GradExTxt() {

    return (

        <div className={styles.container}>
            <h1>GradEx May 13, 2022</h1>
            <div>Scroll through the <div>interactive timeline</div> to experience a day in the life of the SunSet Lamp</div>
            <h1></h1>
            <h1>The Breakdown</h1>
            <div>Sun Break recommendations are calculated based on ideal sun exposure times that regulate the circadian rhythms of each sleeping chronotype.</div>
            <div>In this demo, we follow the Dolphin, aka the insomniac.</div>
        </div>

    );

}

export default GradExTxt;