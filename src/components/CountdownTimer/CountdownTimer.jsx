import styles from './CountdownTimer.module.css';
import { useEffect, useState, useRef } from 'react';
import {Time} from '../../utils/TimerUtils'

function padZero(num, l) {
    return String(num).padStart(l, '0')
}

export function CountdownTimer({label="timer", color, timeInMilliseconds}) {
    let [isRunning, pausePlay]  = useState(false);

    let[time, changeTime] = useState(new Time(timeInMilliseconds))

    useEffect(()=>{
        const intervalCall = setInterval(()=>{
            if(isRunning) {
                time = new Time(time.timeInMilliseconds-1000)
                changeTime(time)
            }
        }, 1000);
        return () => clearInterval(intervalCall)
    },[isRunning, time])

    let timer = <div className={styles.timer} onClick={()=>{
        pausePlay(!isRunning);  
    }}> 
        <div className={styles.clock}>
            <p>{padZero(time.hours,2)}<sup>H</sup></p>:<p>{padZero(time.minutes,2)}<sup>M</sup></p>:<p>{padZero(time.seconds,2)}<sup>S</sup></p>
        </div>
        <hr width="76"/>
        <div className={styles.label}>   
            {label.toUpperCase()}
        </div>
    </div>;

    return (<div className={styles.CountdownTimer}>
        {timer}
    </div>);
}