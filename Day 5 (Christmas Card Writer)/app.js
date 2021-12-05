const greetingDisplay = document.getElementById('greeting-display');
const btn = document.getElementById('btn');

const greetings = [
  'Santa Claus is coming to town!',
  'We wish you a Merry Christmas!',
  'Happy holidays!',
  'Ho, ho, ho! Merry Christmas!',
  'Jingle all the way!',
];

function writeGreeting() {
  const msg = greetings.length;

  const displayText = greetings[Math.floor(Math.random() * msg)];
  greetingDisplay.innerHTML = displayText;
}

btn.addEventListener('click', writeGreeting);
