const speedometer = document.getElementById('speedometer');
const select = document.getElementById('select');
const time = document.getElementById('time');
const btn = document.getElementById('btn');
let currentLocation = '';
let timeTaken = 0;

let destination = [
  {
    name: 'Munich',
    distanceFromPrevDestination: 2892,
  },
  {
    name: 'Kiev',
    distanceFromPrevDestination: 1111,
  },
  {
    name: 'Ulaanbaatar',
    distanceFromPrevDestination: 5324,
  },
  {
    name: 'Sydney',
    distanceFromPrevDestination: 5458,
  },
  {
    name: 'Tijuana',
    distanceFromPrevDestination: 6531,
  },
  {
    name: 'Chicago',
    distanceFromPrevDestination: 1729,
  },
];

function calculateSpeed() {
  let speed = 0;
  currentLocation = select.value;
  for (let i = 0; i < destination.length; i++) {
    if (currentLocation === destination[i].name) {
      const distance = destination[i].distanceFromPrevDestination;
      const distanceInTime = parseInt(time.value);
      if (distanceInTime <= 0 || typeof distanceInTime != 'number') {
        speedometer.classList.add('error');
        speedometer.textContent = 'Use a value greater than 0';
      } else {
        speed = Math.round(distance / distanceInTime);
        speedometer.classList.add('success');
        speedometer.textContent = `
                    The speed in speedometer of ${destination[i].name} is ${speed}
                `;
      }
    }
  }
}

btn.addEventListener('click', calculateSpeed);
