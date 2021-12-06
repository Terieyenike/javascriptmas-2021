const greeting = document.getElementById('greeting');
const christmassifierBtn = document.getElementById('christmassifierBtn');
const audio = document.getElementById('audio');
const body = document.querySelector('body');
christmassifierBtn.addEventListener('click', christmassifyName);

let isPlaying = false;

function christmassifyName() {
  greeting.classList.toggle('christmassified');

  if (christmassifierBtn.innerText === 'Christmassify') {
    christmassifierBtn.innerText = 'De-christmassify';
    audio.play();
    isPlaying = true;
  } else {
    christmassifierBtn.innerText = 'Christmassify';
    if (!audio) return;
    audio.currentTime = 0;
    audio.pause();
    isPlaying = false;
  }
}
