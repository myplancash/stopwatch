let timeText = document.querySelector(".wrapper h2");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

console.log(timeText.textContent);

let total = 0;
let ms = 0;
let s = 0;
let m = 0;

let intervalID;

const startHandler = () => {
  intervalID = setInterval(() => {
    total++;
    ms = total % 100;
    s = Math.floor(total / 100) % 60;
    m = Math.floor(s / 6000);
    timeText.innerText = `${m}:${s}:${ms}`
  }, 10)
}

const resetHandler = () => {
  total = 0;  
  clearInterval(intervalID)
  timeText.innerText = `00:00:00`
}



start.addEventListener("click", startHandler)
stop.addEventListener("click", () => clearInterval(intervalID))
reset.addEventListener("click", resetHandler)
