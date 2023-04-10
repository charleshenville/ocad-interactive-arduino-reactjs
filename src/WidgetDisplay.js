import React, { useState, useEffect } from 'react';
import widgets from './widgets.json'
import styles from './widget.module.css'

const WidgetDisplay = ({ value }) => {

    let widget = widgets.find(img => img.value === String(value));

    if(!widget){
        widget = widgets.find(img => img.value === "3");
    }

    return (
        <div className={styles.widgetWrapper}>
            <img src={widget.src} alt={`${widget.code}`} className={styles.widget} />
        </div>
    );
}

export default WidgetDisplay;