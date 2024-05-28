import styles from './CountdownTimer.module.css';

export function CountdownTimer({label="Timer", color}) {
    return (<div className={styles.CountdownTimer}>
        <div className={styles.timer}> 
            <div className={styles.clock}>
                00:00:00
            </div>
            <hr width="76"/>
            <div className={styles.label}>   
                {label}
            </div>
        </div>
    </div>);
}