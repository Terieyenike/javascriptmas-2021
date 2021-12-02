const countdownDisplay = document.getElementById('countdown-display');
const countdownText = document.querySelector('.countdown-text');
const time = document.querySelector('.time');

const christmasDay = new Date('12/25/2021');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

function renderCountdown() {
  const christmas = 25;

  const today = String(new Date().getDate()).padStart(2, '0');
  let remainingTime = christmas - today;

  if (remainingTime <= 0) {
    countdownText.textContent = 'Merry Christmas Scrimmers';
    clearInterval();
    return;
  }

  countdownDisplay.textContent = remainingTime;

  const countdownToday = christmasDay - new Date();
  const hours = String(Math.floor((countdownToday % day) / hour)).padStart(
    2,
    '0'
  );
  const minutes = String(Math.floor((countdownToday % hour) / minute)).padStart(
    2,
    '0'
  );
  const seconds = String(
    Math.floor((countdownToday % minute) / second)
  ).padStart(2, '0');
  time.innerHTML = `${hours} hrs ${minutes} mins ${seconds} secs`;
}

timerId = setInterval(renderCountdown, second);
