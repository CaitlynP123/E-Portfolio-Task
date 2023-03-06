const form = document.getElementById('form');
const fdo = {};

form.addEventListener('submit', getData);

function getData(event) {
    event.preventDefault();
    const fd = new FormData(event.target);

    fd.forEach((value, key) => (fdo[key] = value));
    console.log(fdo);

    form.reset()
}

const button = document.querySelector('#submitButton');
const message = document.querySelector('#signedUpMessage');

button.addEventListener('click', () => {
  message.style.display = 'block';
  setTimeout(() => {
    message.style.display = 'none';
  }, 3000);
});