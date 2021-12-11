const metre = document.getElementById('meter');
const today = String(new Date().getDate()).padStart('2', '0');
const btn = document.getElementById('loader');

const loader = () => {
  meter.setAttribute('value', today);
};

btn.addEventListener('click', loader);
