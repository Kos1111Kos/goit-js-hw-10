// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const delay = formData.get('delay');
  const state = formData.get('state');

  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } else if (state === 'rejected') {
      setTimeout(() => {
        reject(delay);
      }, delay);
    }
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Fulfilled promise',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Rejected promise',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
}
