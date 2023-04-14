import React, { useState, useEffect } from 'react';
import styles from './text-styles.css'

function LeftMostTxt() {

    return (

        <div className={styles.container}>
            <div style = {{fontWeight:"bold", fontSize: "48px"}}>SunSet Demo</div>
            <div style = {{fontSize: "26px", fontFamily: "General Sans", marginRight: "20px"}}>Experience the lamp in action by looking at a day in the past...</div>
        </div>

    );

}

export default LeftMostTxt;