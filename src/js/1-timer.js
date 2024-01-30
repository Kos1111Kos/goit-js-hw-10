import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const inputDatePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
startButton.disabled = true;
let timeDadline;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      return iziToast.error({
        message: 'Please choose a date in the future',
      });
    }
    startButton.disabled = false;
    timeDadline = selectedDates[0];
  },
};

flatpickr(inputDatePicker, options);

startButton.addEventListener('click', () => {
  startCountdown(timeDadline);
  startButton.disabled = true;
});

let timerId; // Объявляем переменную для идентификатора таймера

function startCountdown(selectedDate) {
  timerId = setInterval(() => {
    const currentDate = Date.now();
    const timeDifference = selectedDate - currentDate;

    if (timeDifference <= 0) {
      startButton.disabled = false;
      clearInterval(timerId); // Очищаем интервал, если время истекло
      iziToast.success({ title: 'Success', message: 'Time end' });
    } else {
      const formattedTime = formatTime(timeDifference);
      renderTime(formattedTime);
    }
  }, 1000);
}

function formatTime(ms) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

function renderTime({ days, hours, minutes, seconds }) {
  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}
