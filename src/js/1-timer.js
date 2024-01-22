import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';

const inputDatePicker = document.getElementById('datetime-picker');
const startButton = document.getElementById('startButton');
const timerDisplay = document.getElementById('timer');

let countdownInterval;

flatpickr(inputDatePicker);

startButton.addEventListener('click', () => {
  const selectedDate = new Date(inputDatePicker.value).getTime();
  startCountdown(selectedDate);
});

function startCountdown(selectedDate) {
  timeDifference = selectedDate - Date.now(); // Вычислить разницу

  timerId = setInterval(() => {
    timeDifference -= 1000; // Уменьшить разницу каждую секунду

    if (
      parseInt(secondsRef.textContent) <= 0 &&
      parseInt(minutesRef.textContent) <= 0 &&
      parseInt(hoursRef.textContent) <= 0 &&
      parseInt(daysRef.textContent) <= 0
    ) {
      iziToast.success({ title: 'Success', message: 'Time end' });
      clearInterval(timerId);
    } else {
      const formatDate = convertMs(timeDifference);
      renderDate(formatDate);
    }
  }, 1000);
}

function formatTime(ms) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));

  const formattedDays = days.toString().padStart(2, '0');
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import iziToast from 'izitoast';

// const inputDatePicker = document.getElementById('datetime-picker');
// const startButton = document.getElementById('startButton');
// const secondsRef = document.getElementById('seconds');
// const minutesRef = document.getElementById('minutes');
// const hoursRef = document.getElementById('hours');
// const daysRef = document.getElementById('days');

// let timeDifference = 0; // Инициализация timeDifference
// let timerId; // Инициализация timerId

// flatpickr(inputDatePicker);

// startButton.addEventListener('click', () => {
//   const selectedDate = new Date(inputDatePicker.value).getTime();
//   startCountdown(selectedDate);
// });

// function startTimer() {
//   startButton.setAttribute('disabled', true);
//   inputDatePicker.setAttribute('disabled', true);

//   timeDifference < 1000;

//   if (
//     parseInt(secondsRef.textContent) <= 0 &&
//     parseInt(minutesRef.textContent) <= 0 &&
//     parseInt(hoursRef.textContent) <= 0 &&
//     parseInt(daysRef.textContent) <= 0
//   ) {
//     iziToast.success({ title: 'Success', message: 'Time end' });
//     clearInterval(timerId);
//   } else {
//     const formatDate = convertMs(timeDifference);
//     renderDate(formatDate);
//   }
// }

// function renderDate(formatDate) {
//   secondsRef.textContent = formatDate.seconds;
//   minutesRef.textContent = formatDate.minutes;
//   hoursRef.textContent = formatDate.hours;
//   daysRef.textContent = formatDate.days;
// }

// function convertMs(ms) {
//   // Количество миллисекунд в единице времени
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Оставшиеся дни
//   const days = Math.floor(ms / day);
//   // Оставшиеся часы
//   const hours = Math.floor((ms % day) / hour);
//   // Оставшиеся минуты
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Оставшиеся секунды
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import iziToast from 'izitoast';

// const inputDatePicker = document.getElementById('datetime-picker');
// const startButton = document.getElementById('startButton');
// const secondsRef = document.getElementById('seconds');
// const minutesRef = document.getElementById('minutes');
// const hoursRef = document.getElementById('hours');
// const daysRef = document.getElementById('days');

// let timeDifference;
// let timerId;

// flatpickr(inputDatePicker, {
//   onChange: selectedDate => {
//     const now = new Date();
//     const selectedDateObj = new Date(selectedDate);
//     timeDifference = selectedDateObj.getTime() - now.getTime();
//   },
// });

// startButton.addEventListener('click', () => {
//   startTimer();
// });

// function startTimer() {
//   startButton.setAttribute('disabled', true);
//   inputDatePicker.setAttribute('disabled', true);

//   timerId = setInterval(() => {
//     timeDifference -= 1000;

//     if (
//       parseInt(secondsRef.textContent) <= 0 &&
//       parseInt(minutesRef.textContent) <= 0 &&
//       parseInt(hoursRef.textContent) <= 0 &&
//       parseInt(daysRef.textContent) <= 0
//     ) {
//       iziToast.success({ title: 'Success', message: 'Time end' });
//       clearInterval(timerId);
//     } else {
//       const formatDate = convertMs(timeDifference);
//       renderDate(formatDate);
//     }
//   }, 1000);
// }

// function renderDate(formatDate) {
//   secondsRef.textContent = formatDate.seconds;
//   minutesRef.textContent = formatDate.minutes;
//   hoursRef.textContent = formatDate.hours;
//   daysRef.textContent = formatDate.days;
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}
