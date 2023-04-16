import React, { useState, useEffect } from 'react';
import styles from './text-styles.css'

function LeftMostTxt() {

    return (

        <div className={styles.container}>
            <div style = {{fontWeight:"bold", fontSize: "48px"}}>SunSet Demo</div>
            {/* <div style = {{fontSize: "26px", fontFamily: "General Sans", marginRight: "20px"}}>Experience the lamp in action by looking at a day in the past...</div> */}
            <div style={{fontSize: '36px', color: '#BA754A'}}>GradEx May 13, 2022</div>
            <div style = {{fontSize: "26px", fontFamily: "General Sans"}}>Experience the point of view of a user at GradEx last year through this <span style={{color: '#BA754A', fontWeight: 'bold'}}>interactive timeline.</span></div>
        </div>

    );

}

export default LeftMostTxt;