const animais = document.getElementById('animais');
const gridSEction = document.getElementsByClassName('grid-section');
console.log(gridSEction.length);

// query selector - o primeiro que voce seleciona com css. usando . para class # para id

const linkInterni = document.querySelectorAll('[href^="#"]');
console.log(linkInterni.href);

// linkInterni.forEach((item) => {
//   console.log(item);
// });
const ArrayGrid = Array.from(linkInterni);
const Arra = ArrayGrid.map((item, i) => {
  return item.classList.add(i);
});


const menu = document.querySelectorAll('.menu ul li');

menu.forEach((item) => item.classList.add('ativo'));
menu.forEach((item, i) => {
  if (i !== 0) item.classList.remove('ativo');
});
console.log(...menu);
// menu.classList.add('ativo');
// console.log(menu.classList);

// const img = document.querySelector('img');

// console.log(img.getAttribute('src'));
// const setAtributeImg = img.setAttribute('alt', 'Raposa');

// console.log(setAtributeImg, 'hhjkh');
