const input = document.getElementById('input');
const btn = document.getElementById('btn');
let guestList = document.getElementById('guest-list');
let guests = [
  'Partner',
  'Nice Relative 1',
  'Nice Relative 2',
  'Evil Relative',
  'Lonely Neighbour',
];

const handleSubmit = () => {
  let name = input.value;

  if (!name) return;

  guestList.innerHTML += `<li>${name}</li>`;
  input.value = '';
};

const displayItems = () => {
  const html = guests
    .map(
      (guest) => `
        <li>${guest}</li>
    `
    )
    .join('');
  guestList.innerHTML = html;
};

displayItems();

btn.addEventListener('click', handleSubmit);
