let countdown = document.getElementById('countdown');
let time = prompt('enter the time');
const startingMin = time;
let totalTime = 60 * startingMin;

setInterval(showTime, 1000);

function showTime() {
    let min = Math.floor(totalTime / 60);
    let sec = totalTime % 60;
    sec = sec < 10 ? '0' + sec : sec;
    min = min < 10 ? '0' + min : min;
    countdown.innerHTML = `${min}:${sec}`;
    --totalTime;
}