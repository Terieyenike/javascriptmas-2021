const btn = document.getElementById('btn');
let food = document.getElementById('food');
const guestInput = document.querySelector('[name=guests]');
const checkedBox = document.querySelector('[name=vegetarian]');

function christmasDinner() {
  const guest = guestInput.value;
  checkedBox.checked
    ? (food.textContent = 'nut roast')
    : guest <= 4
    ? (food.textContent = 'turkey')
    : (food.textContent = 'goose');
}

btn.addEventListener('click', christmasDinner);
