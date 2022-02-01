const menu = document.querySelector('.animais-lista');
const h2 = document.querySelector('h2');

console.log(menu.scrollHeight);
console.log(h2);

// const top = menu.offsetTop;
// clientHeigh - valor do hitgh
// menu.scrollHeight - valor real do hight

//  getBoundingClientRect() - retorna um objecto com valores de width e Height em relacao ao elemento

// const rect = h2.getBoundingClientRect();
// console.log(rect.height);

// // window - InnerWidth
// console.log(window.innerWidth, '/n/');

// //  WINDOW page Yoffset - A distancia que ele da deu de scrool

// const small = window.matchMedia('(max-width:600px)');
// const me = (small.onchange = function () {
//   return 'Usuario mobile';
// });
// console.log(me());

const topImage = window.document.querySelector('img');
console.log(topImage.offsetTop);

const imgs = document.querySelectorAll('img');

let total = 0;
imgs.forEach((img) => {
  const rect = img.getBoundingClientRect().width;
  total += rect;
});
console.log(total);

const as = document.querySelectorAll('a')


console.log(as)
