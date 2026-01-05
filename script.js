const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

// Update stopwatch display
function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = `${h}:${m}:${s}`;
}

// Start stopwatch
startBtn.addEventListener("click", function () {
  if (timer !== null) return;

  timer = setInterval(function () {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 1000);
});

// Stop stopwatch
stopBtn.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
});

// Reset stopwatch
resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
});
