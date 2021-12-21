const colourEye = document.getElementById('color');
const colourNose = document.getElementById('color3');
const buttonColour = document.getElementById('color2');

const setColourEye = () => {
  const eyes = document.querySelectorAll('.eye');
  eyes.forEach((eye) => (eye.style.backgroundColor = colourEye.value));
};

const setColourNose = () => {
  const nose = document.querySelector('.nose');
  nose.style.borderColor = `transparent transparent transparent ${colourNose.value}`;
};

const setButtonColour = () => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(
    (button) => (button.style.backgroundColor = buttonColour.value)
  );
};

colourEye.addEventListener('input', setColourEye);
colourNose.addEventListener('input', setColourNose);
buttonColour.addEventListener('input', setButtonColour);
