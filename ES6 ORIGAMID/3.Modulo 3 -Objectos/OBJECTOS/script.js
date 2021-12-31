// const pessoa = new Object(
//   {
//     nome: 'andre',
//     idade: 25
//   }
// )

// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor
//     return this
//   },
//   acelerar() {
//     return this.marca + ' acelerou'
//   },
//   buzinar() {
//     return this.marca + ` buzinou`
//   }
// }

// const honda = Object.create(carro).init('honda');
// console.log(honda)



// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou'
//   },
//   buzinar() {
//     return 'Buzinou'
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true
// }
// const caroo = {
//   rodas: 4,
//   capacete: false,
// }
// Object.assign(moto, carro, funcaoAutomovel)


// const moto = {
//   capacete: true,
// }
// console.log(moto)

// Object.defineProperties(moto, {
//   rodas: {
//     get() {
//       this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4
//     }
//   }
// })

// console.log(moto)

// const frutas = ['banana']


// console.log(Object.getPrototypeOf(frutas))

// const carro = {
//   marca: 'ford'
// }
// console.log(carro)

// delete carro.marca;

// Object.freeze(carro)


// const honda = carro;

// honda.marca = 'honda'

// console.log(carro)


// const frut = ['banana', 'uva', 'maca']
// console.log(Array.prototype.isPrototypeOf(frut))
// console.log(frut.toString())

// const carro = {
//   marca: '',
// }


// console.log(Object.prototype.toString.call(frut))



// Crie uma função que verifique
// corretamente o tipo de dado
function tipoDado(selector){
  return Object.prototype.toString.call(selector)
}

const novoDado = tipoDado()
console.log(novoDado)



// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}

Object.defineProperties(quadrado, {
  lados:{
    value: 4,
    enumerable:true
  }
})
quadrado.lados=10;

console.log(quadrado)

// Previna qualquer mudança
// no objeto abaixo
const configuracao = { 
  width: 800,
  height: 600,
  background: '#333'
}
 
// Liste o nome de todas
// as propriedades do
