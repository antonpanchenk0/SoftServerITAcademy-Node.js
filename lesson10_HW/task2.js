function countdown(time) {
    let sign;
    time >= 0 ? sign = '+' : sign = '-';
    let _time = Math.abs(time);
    let totalSeconds = Math.floor(_time / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let leftMin = totalSeconds % 3600;
    let minutes = Math.floor(leftMin / 60);
    let sec = minutes % 60;
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    sec = sec.toString().padStart(2, '0');
    return `${sign}${hours}:${minutes}:${sec}`;
}
console.log(countdown(360000000));
console.log(countdown(61000));
console.log(countdown(-154800000));
console.log(countdown(0));