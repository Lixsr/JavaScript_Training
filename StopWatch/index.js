const timeDisplay = document.getElementById("timeDisplay");
const startbtn = document.getElementById("start");
const pausebtn = document.getElementById("pause");
const resetbtn = document.getElementById("reset");

let pause = true;
let startTime;
let elapsedTime = 0;
let min = 0;
let hr = 0;
let sec = 0;
let timeInt;
let temp = 0;
timeDisplay.textContent = `${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`


startbtn.addEventListener('click', start)
pausebtn.addEventListener('click', stop)
resetbtn.addEventListener('click', reset)

function start(){
    if(pause){
        pause = false;
        startTime = Date.now();
        timeInt = setInterval(updateTime, 50);
    }
}

function updateTime(){
    elapsedTime = Date.now() - startTime + temp;
    sec = Math.floor((elapsedTime / (1000)) % 60)
    min = Math.floor((elapsedTime / (1000*60)) % 60)
    hr = Math.floor((elapsedTime / (1000*60*60)) % 24)

    timeDisplay.textContent = `${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
}

function stop(){
    pause = true;
    temp = elapsedTime;
    clearInterval(timeInt)
}
function reset(){
    stop();
    temp = 0;
    sec = 0;min = 0;hr = 0;
    timeDisplay.textContent = `${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`

}