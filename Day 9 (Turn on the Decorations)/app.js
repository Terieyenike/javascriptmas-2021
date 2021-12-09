const house = document.getElementById('house');
// const decorator = document.getElementById("decorator");
decorator.addEventListener('click', deckTheHalls);

function deckTheHalls(e) {
  if (e.target.checked) {
    let snowman = document.createElement('span');
    snowman.textContent = ' 🎄 ';
    house.appendChild(snowman);
  } else {
    house.innerText = '🏡';
  }
}
