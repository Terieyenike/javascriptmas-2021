const niceList = document.getElementById('nice-list');
const naughtyList = document.getElementById('naughty-list');
const btn = document.getElementById('btn');

const sorteesArr = [
  {
    name: 'David',
    hasBeenGood: false,
  },
  {
    name: 'Del',
    hasBeenGood: true,
  },
  {
    name: 'Valerie',
    hasBeenGood: false,
  },
  {
    name: 'Astrid',
    hasBeenGood: true,
  },
];

const sort = () => {
  const filterSorteesArr = sorteesArr.filter((item) => {
    const li = document.createElement('li');
    li.textContent = item.name;
    if (item.hasBeenGood) {
      niceList.appendChild(li);
    } else {
      naughtyList.appendChild(li);
    }
  });
};

btn.addEventListener('click', sort);
