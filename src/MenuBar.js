import React, { useState, useEffect } from 'react';
import styles from './menu.module.css';

function MenuBar() {

    const gitmainurl = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
    return (
        <div className={styles.container}>

            <div className={styles.grid}>

                <div>
                    <div className={styles.txtBolded}>"SunSet Lamp" Demo</div>
                    <div className={styles.txt}>[Development: Charles Henville] [Design: Sade Huh]</div>
                </div>

                <a className={styles.git} target="_blank" href="https://github.com/charleshenville/ocad-interactive-arduino-reactjs">
                    <img src={gitmainurl} alt="GitHub" className={styles.gitimg}></img>
                </a>
            </div>

        </div>
    );
}

export default MenuBar;