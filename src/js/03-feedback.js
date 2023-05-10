import throttle from 'lodash.throttle';

const FORM_STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      FORM_STORAGE_KEY,
      JSON.stringify({ email: email.value, message: message.value })
    );
  }, 500)
);

const savedData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY)) || {};
email.value = savedData.email || '';
message.value = savedData.message || '';

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  localStorage.removeItem(FORM_STORAGE_KEY);
  form.reset();
});
