// const perimetro = new Function('lado', 'return lado*4');
// //  propriedade.length

// function somar(a, b) {
//   return a + b;
// }

// function darOi() {
//   console.log('Oi para voce');
// }

// darOi.call({}, null);

// const master = {
//   marca: 'ford',
//   ano: 2020,
// };

// function descriacoCarro() {
//   console.log(this.marca + ' ' + this.ano);
// }

// descriacoCarro.call(master);

// const carros = [1, 2, 3, 4];

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// });

// function Dom(selector) {
//   this.element = document.querySelector(selector);
// }

// Dom.prototype.ativo = function (classe) {
//   this.element.classList.add(classe);
// };
// const p = new Dom('p');
// const li = {};
// console.log(p);

// const numeros = [2, 6, 5, 5, 45, 45, 484, 8, 464, 54, 56456, 456456, 45];

// console.log(Math.max.apply(null, numeros));

// const $ = document.querySelectorAll.bind(document);

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const $ = document.querySelectorAll.bind(document);

const ps = Array.from($('p'));
const somaP = ps.reduce((ac, it) => {
  return ac + it.innerText.length;
}, 0);
console.log('Soma paragrafos: ', somaP);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará
//dinâmico
