const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');

let isPlaying = false;

const soundPlayer = new Audio(
  'https://res.cloudinary.com/terieyenike/video/upload/v1638771696/christmas-cinematic-dream-piano-9784_xetqh3.mp3'
);

playBtn.addEventListener('click', () => {
  soundPlayer.play();
  isPlaying = true;
});

pauseBtn.addEventListener('click', () => {
  soundPlayer.pause();
  isPlaying = false;
});

stopBtn.addEventListener('click', () => {
  if (!soundPlayer) return;
  soundPlayer.pause();
  soundPlayer.currentTime = 0;
  isPlaying = false;
});
