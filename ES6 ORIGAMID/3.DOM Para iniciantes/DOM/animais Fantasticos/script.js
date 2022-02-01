//  Dimensoes e distancias // Objectos de element e de HTMLelements

const animaisSection = document.querySelector('.animais-lista');
const animaisTop = animaisSection.offsetTop;
const Raposa = document.querySelector('h2');

console.log(animaisSection.clientHeight);
console.log(animaisTop);
console.log(Raposa.offsetLeft);

const rect = Raposa.getBoundingClientRect();
console.log(rect);

const { matches } = window.matchMedia('max-width:600px');

if (matches) {
  console.log('e mobile');
} else {
  console.log('usaurio desktop');
}
