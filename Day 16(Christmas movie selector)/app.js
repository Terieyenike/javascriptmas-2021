const ageSelector = document.getElementById('age-selector');
const genreSelector = document.getElementById('genre-selector');

const btn = document.getElementById('btn');
const suggestedMovie = document.getElementById('suggested-movie');

const moviesArr = [
  {
    name: 'Die Hard',
    age: '18+',
    genre: 'Action',
  },
  {
    name: 'Love Actually',
    age: '18+',
    genre: 'Romance',
  },
  {
    name: 'The Polar Express',
    age: 'PG',
    genre: 'Action',
  },
  {
    name: 'Shrek',
    age: 'PG',
    genre: 'Romance',
  },
];

function showMovie() {
  const selectedAge = ageSelector.value;
  const selectedMovie = genreSelector.value;
  for (let i = 0; i < moviesArr.length; i++) {
    if (
      moviesArr[i].age === selectedAge &&
      moviesArr[i].genre === selectedMovie
    ) {
      suggestedMovie.textContent = moviesArr[i].name;
    }
  }
}

btn.addEventListener('click', showMovie);
