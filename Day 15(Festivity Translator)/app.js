const languageSelector = document.getElementById('language-selector');
const greetingDisplay = document.getElementById('greeting-text');
languageSelector.addEventListener('change', translate);

const greetingsArr = [
  {
    language: 'English',
    greeting: 'Merry Christmas!',
  },
  {
    language: 'Spanish',
    greeting: 'Feliz Navidad!',
  },
  {
    language: 'Ukrainian',
    greeting: 'щасливого Різдва!',
  },
  {
    language: 'Welsh',
    greeting: 'Nadolig Llawen!',
  },
];

function translate() {
  greetingsArr.map((selectedLanguage) => {
    if (selectedLanguage.language === languageSelector.value) {
      greetingDisplay.textContent = selectedLanguage.greeting;
    }
  });
}
