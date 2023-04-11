import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';

const Slider = ({ min, max, initialValue, onChange }) => {
    const [value, setValue] = useState(initialValue || min);
    const [thumbPosition, setThumbPosition] = useState(0);
    const [locked, setLocked] = useState(false);

    const bufferSize = 20;

    const generateLabels = () => {
        const numberOfLabels = 9;
        const labels = [];

        for (let i = 0; i < numberOfLabels; i++) {
            const position = (i / (numberOfLabels - 1)) * 100;
            const labelValue = 3 * i;

            labels.push(
                <div
                    key={`label-${i}`}
                    className={styles.label}
                    style={{
                        left: `${position}%`,
                    }}
                >
                    {labelValue}
                </div>
            );
        }

        return labels;
    };

    useEffect(() => {
        const position = ((value - min) / (max - min)) * 100;
        const adjustedPosition = position * ((100 - 2 * bufferSize) / 100) + bufferSize;
        setThumbPosition(adjustedPosition);
    }, [value, min, max]);

    const handleChange = (event) => {
        setValue(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
        if ([13, 17].includes(parseInt(event.target.value)) && !locked) {
            setLocked(true);
            setTimeout(() => {
                setLocked(false);
            }, 10000);
        }
    };

    const daytimeSubsectionMin = 10;
    const daytimeSubsectionMax = 14;
    const daytimeSubsectionWidth = ((daytimeSubsectionMax - daytimeSubsectionMin) / (max - min)) * 100;

    const lastSubsectionMin = 14;
    const lastSubsectionMax = 18;
    const lastSubsectionWidth = ((lastSubsectionMax - lastSubsectionMin) / (max - min)) * 100;

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.trackWrapper}>
                {locked && <div className={styles.locOverlay}></div>}
                
                <div
                    className={styles.daytimeSubsection}
                    style={{
                        left: `${((daytimeSubsectionMin - min) / (max - min)) * 100}%`,
                        width: `${daytimeSubsectionWidth}%`,
                    }}
                />
                <div
                    className={styles.lastSubsection}
                    style={{
                        left: `${((lastSubsectionMin - min) / (max - min)) * 100}%`,
                        width: `${lastSubsectionWidth}%`,
                    }}
                />
                <input
                    className={styles.slider}
                    type="range"
                    min={min || 0}
                    max={max || 24}
                    value={value}
                    onChange={handleChange}
                    disabled={locked}
                />
            </div>
            <div className={styles.axisLabelContainer}>{generateLabels()}</div>
        </div>
    );
};

export default Slider;