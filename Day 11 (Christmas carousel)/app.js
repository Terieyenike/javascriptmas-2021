const previous = document.getElementById('previous');
const next = document.getElementById('next');
const img = document.getElementById('img');
const imgs = [
  {
    src: './images/ojet.jpg',
    alt: 'christmas village at night with snow and christmas tree',
  },
  {
    src: './images/teri.jpeg',
    alt: 'white and gold wrapped present on white table with snowflake decorations',
  },
  {
    src: './images/terieyenike.jpeg',
    alt: 'small black dog and small beige dog looking out the window at snow next to Christmas wreath',
  },
];

let imgNum = 0;

const totalSlides = imgs.length;

const imgAttributes = () => {
  img.src = imgs[imgNum].src;
  img.alt = imgs[imgNum].alt;
};

const moveToNextSlide = () => {
  if (imgNum === totalSlides - 1) {
    imgNum = 0;
    imgAttributes();
  } else {
    imgNum++;
    imgAttributes();
  }
};

const moveToPrevSlide = () => {
  if (imgNum === 0) {
    imgNum = totalSlides - 1;
    imgAttributes();
  } else {
    imgNum--;
    imgAttributes();
  }
};

previous.addEventListener('click', moveToPrevSlide);
next.addEventListener('click', moveToNextSlide);
