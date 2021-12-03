const greeting = document.getElementById('greeting');
const btn = document.getElementById('btn');
const body = document.querySelector('body');

function fix() {
  greeting.style.fontFamily = 'Mountains of Christmas, cursive';
  greeting.innerText = 'make it Christmassy! ☃️';
  body.classList.add('show');
}

btn.addEventListener('click', fix);
