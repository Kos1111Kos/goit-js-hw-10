import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';

const inputDatePicker = document.getElementById('datetime-picker');
const startButton = document.getElementById('startButton');
const secondsRef = document.getElementById('seconds');
const minutesRef = document.getElementById('minutes');
const hoursRef = document.getElementById('hours');
const daysRef = document.getElementById('days');

let timeDifference;
let timerId;

flatpickr(inputDatePicker);

startButton.addEventListener('click', () => {
  startTimer();
});

function startTimer() {
  startButton.setAttribute('disabled', true);
  inputDatePicker.setAttribute('disabled', true);

  timeDifference -= 1000;

  if (
    parseInt(secondsRef.textContent) <= 0 &&
    parseInt(minutesRef.textContent) <= 0
  ) {
    iziToast.success({ title: 'Success', message: 'Time end' });
    clearInterval(timerId);
  } else {
    const formatDate = convertMs(timeDifference);
    renderDate(formatDate);
  }
}

function renderDate(formatDate) {
  secondsRef.textContent = formatDate.seconds;
  minutesRef.textContent = formatDate.minutes;
  hoursRef.textContent = formatDate.hours;
  daysRef.textContent = formatDate.days;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}
