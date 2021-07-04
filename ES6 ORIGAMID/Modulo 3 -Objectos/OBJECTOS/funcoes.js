// const perimetro = new function('lado', 'return lado * 4')

// function somar(n1, n2) {
//   return n1 + n2
// }

// console.log(somar.name.toUpperCase())



// function darOi(nome) {
//   console.log('oi' + nome)
// }

// darOi.call({}, ` andre`);
// window.marca = 'carro'
// window.ano = 288
// function descricaoCarro() {
//   console.log(this)
//   console.log(this.marca + ' ' + this.ano)
// }

// descricaoCarro.call({ marca: 'honda', ano: 2015 });


// const carros = ['ford', 'vw', 'nissan']
// const frutas = ['banan', 'per', 'tu']



// carros.forEach.call(frutas, (item) => {
//   console.log(item)
// })

// function Dom(selector) {
//   this.element = document.querySelector(selector)
// }

// Dom.prototype.ativo = function (classe) {
//   this.element.classList.add(classe)
// }

// const ul = new Dom('ul')

// const li = {
//   element: document.querySelector('li')
// }
// ul.ativo.call(li, 'ativar');
// Dom.prototype.ativo();




// const frutas = ['uva', 'banana', 'maca']

// Array.prototype.mostrarThis = function () {
//   console.log(this)
// }

// Array.prototype.pop.call(frutas)

// const li = document.querySelectorAll('li')

// const filtro = Array.prototype.filter.bind(li, (item) => {
//   return item.classList.contains('ativo')
// })

// console.log(filtro)



// Retorne a soma total de caracteres dos 
// parágrafos acima utilizando reduce

const p = Array.from(document.querySelectorAll('p'))
console.log(p)

const soma = p.reduce((acumulador, item) => {
  const somaItem = item.innerText.length
  return acumulador + somaItem
}, 0)
console.log(soma)


//cire uma funcao que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novos(tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerText = `${conteudo}`: null;
  return elemento
}
const newElment = new novos('div', 'ativo', `Lobo-cinzento científico Canis lupus`)
console.log(newElment)

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico 
const newFunction = new novos('h1','titulo')

const h2Titulo = novos.bind(null, 'h1', 'titulo')

console.log(h2Titulo('cursp de javasciprt'))