let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

const timer = (seconds) => {
  // clear any existing timers
  clearInterval(countdown);

  let now = Date.now();
  let then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

const displayTimeLeft = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;
  let display = `
    ${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}
  `;

  document.title = display;
  timerDisplay.textContent = display;
}

const displayEndTime = (timestamp) => {
  let end = new Date(timestamp);
  let hour = end.getHours();
  let adjustedHour = hour > 12 ? hour - 12 : hour;
  let minutes = end.getMinutes();
  let display = `
    Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}
  `;

  document.title = display;
  endTime.textContent = display;
}

function startTimer() {
  let seconds = parseInt(this.dataset.time);
  timer(seconds);
}

const selectTime =  (event) => {
  event.preventDefault();
  let mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', selectTime);