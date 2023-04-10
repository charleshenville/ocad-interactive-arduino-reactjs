import React, { useState, useEffect } from "react";
import styles from "./weather.module.css"

function WeatherData({ hour }) {

    const may15data = [20, 19, 16, 16, 15, 12, 12, 13, 18, 20, 20, 20, 21, 21, 23, 23, 28, 22, 21, 21, 19, 19, 19, 16, 15];
    const exportstring = String(may15data[hour])+" c";

    return <div className={styles.main}>{exportstring}</div>;
}

export default WeatherData;