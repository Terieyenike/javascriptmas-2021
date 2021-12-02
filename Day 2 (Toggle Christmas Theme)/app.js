const body = document.getElementById('body');
let greeting = document.getElementById('greeting');
const christmasBtn = document.getElementById('christmas');
const snowBtn = document.getElementById('snow');

const CHRISTMAS_THEME = 'christmas';

function theme(CHRISTMAS_THEME) {
  greeting.textContent = CHRISTMAS_THEME
    ? '🎅 Merry Christmas!'
    : '🎅 Merry Christmas!';
}

christmasBtn.addEventListener('change', (e) => {
  body.setAttribute('class', 'christmas');
  theme(true);
});

snowBtn.addEventListener('change', () => {
  body.setAttribute('class', 'snow');
  theme(false);
});
