import React, { useState, useEffect } from "react";
import widgets from "./weatherimgs.json";
import styles from "./weather.module.css"

function WeatherWidget({ value }) {

    let widget = widgets.find(img => img.code === String(value));
    if (!widget) {
        widget = widgets.find(img => img.code === "1");
    }

    return (
        <div className={styles.widgetWrapper}>
            <img src={widget.src} alt={`${widget.code}`} className={styles.widget} />
        </div>
    );
}

export default WeatherWidget;