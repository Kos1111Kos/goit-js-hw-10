// Імпортуємо бібліотеку
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';

// Імпорт додаткових стилів CSS
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

// Отримуємо посилання на елемент введення дати, кнопку запуску, дані: дні, години, хвилини, секунди
let getRef = selector => document.querySelector(selector);
const imputDatePickerRef = getRef('#datetime-picker');
const btnStartRef = getRef('[data-start]');
const daysRef = getRef('[data-days]');
const hoursRef = getRef('[data-hours]');
const minutesRef = getRef('[data-minutes]');
const secondsRef = getRef('[data-seconds]');

// Встановлюємо початкове значення
let timeDifference = 0;
let timerId = null;
let formatDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    currentDifferenceDate(selectedDates[0]);
  },
};

btnStartRef.setAttribute('disabled', true);

// Встановлюємо flatpickr
flatpickr(imputDatePickerRef, options);

// Встановлюємо прослуховувач подій кліка при запуску кнопки
btnStartRef.addEventListener('click', onBtnStart);
// Скидаємо таймер на BTN
window.addEventListener('keydown', e => {
  if (e.code === 'Escape' && timerId) {
    clearInterval(timerId);

    imputDatePickerRef.removeAttribute('disabled');
    btnStartRef.setAttribute('disabled', true);

    secondsRef.textContent = '00';
    minutesRef.textContent = '00';
    hoursRef.textContent = '00';
    daysRef.textContent = '00';
  }
});

// Запускаємо таймер
function onBtnStart() {
  timerId = setInterval(startTimer, 1000);
}
// Перевірка дати та відображення різниці дат
function currentDifferenceDate(selectedDates) {
  const currentDate = Date.now();

  if (selectedDates < currentDate) {
    btnStartRef.setAttribute('disabled', true);
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
    });
    return;
  }

  timeDifference = selectedDates.getTime() - currentDate;
  formatDate = convertMs(timeDifference);

  renderDate(formatDate);
  btnStartRef.removeAttribute('disabled');
}

// Таймер
function startTimer() {
  btnStartRef.setAttribute('disabled', true);
  imputDatePickerRef.setAttribute('disabled', true);

  timeDifference -= 1000;

  if (secondsRef.textContent <= 0 && minutesRef.textContent <= 0) {
    iziToast.success({ title: 'Success', message: 'Time end' });
    clearInterval(timerId);
  } else {
    formatDate = convertMs(timeDifference);
    renderDate(formatDate);
  }
}

// Рендеринг дати
function renderDate(formatDate) {
  secondsRef.textContent = formatDate.seconds;
  minutesRef.textContent = formatDate.minutes;
  hoursRef.textContent = formatDate.hours;
  daysRef.textContent = formatDate.days;
}
