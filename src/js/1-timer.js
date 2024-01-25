import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';

const inputDatePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const timerDisplay = document.getElementById('timer');

flatpickr(inputDatePicker);

startButton.addEventListener('click', () => {
  const selectedDate = new Date(inputDatePicker.value).getTime();
  startCountdown(selectedDate);
});

let timerId; // Объявляем переменную для идентификатора таймера

function startCountdown(selectedDate) {
  timerId = setInterval(() => {
    const currentDate = Date.now();
    const timeDifference = selectedDate - currentDate;

    if (timeDifference <= 0) {
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
  timerDisplay.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}
