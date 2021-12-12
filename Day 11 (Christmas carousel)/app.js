const previous = document.getElementById('previous');
const next = document.getElementById('next');
const img = document.getElementById('img');
const imgs = [
  {
    src: 'https://user-images.githubusercontent.com/25850598/145730916-64190a36-0072-44ea-91d5-b51b36a3e000.jpg',
    alt: 'christmas village at night with snow and christmas tree',
  },
  {
    src: 'https://user-images.githubusercontent.com/25850598/145730922-34804cd4-8805-4f6f-b16a-f03bfcb5985e.jpeg',
    alt: 'white and gold wrapped present on white table with snowflake decorations',
  },
  {
    src: 'https://user-images.githubusercontent.com/25850598/145730924-6acf1ec0-0ba3-4190-ad7b-e70b24d12fc5.jpeg',
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
