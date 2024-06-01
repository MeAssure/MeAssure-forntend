export function fromMillisecondstoHourMinuteSecond(time) {
    let hd = 1000*60*60;
    let md = 1000*60;
    let sd = 1000; 

    let hr = parseInt(time/hd);
    let mi = parseInt((time%hd)/md);
    let se = parseInt(((time%hd)%md)/sd);
    return {hr, mi, se}
}


export class Time {
    constructor(timeInMilliseconds){ 
        this.timeInMilliseconds = timeInMilliseconds
        let {hr, mi, se} = fromMillisecondstoHourMinuteSecond(timeInMilliseconds)
        this.hours = hr
        this.minutes = mi
        this.seconds = se
    }

    addMilliseconds(milliseconds) {
        this.timeInMilliseconds += milliseconds
        const { hr, mi, se } = fromMillisecondstoHourMinuteSecond(this.timeInMilliseconds);
        this.hours = hr;
        this.minutes = mi;
        this.seconds = se;
    }
}