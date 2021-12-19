const foodHolder = document.getElementById('foodHolder');
const btn = document.getElementById('btn');

async function findYum() {
  const response = await fetch(
    'https://foodish-api.herokuapp.com/api/images/dessert'
  );
  const data = await response.json();

  foodHolder.innerHTML = `<img src=${data.image} alt="random food image" />`;
}

btn.addEventListener('click', findYum);
