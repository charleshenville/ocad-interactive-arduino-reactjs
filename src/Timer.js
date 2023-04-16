import React from 'react';

const Timer = ({active, secsRemain}) => {

    if (active) {
        let modding = Math.floor(Math.abs(secsRemain/60));
        let strplace = '';
        if((secsRemain-60*modding)<10){
            strplace='0';
        }
        return (
            <div>{String(modding)+":"+strplace+String(secsRemain-60*modding)}</div>
        );
    }
    return (

        <div>Demo</div>

    );
};

export default Timer;