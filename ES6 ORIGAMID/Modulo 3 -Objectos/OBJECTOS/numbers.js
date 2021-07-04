// console.log(Number.isNaN(NaN))
// console.log(Number.isInteger(5))

// console.log(parseFloat(`5.4541`))
// console.log(parseInt(`5,43`))
// console.log(parseInt(23.49))



// const variavel = 50.6;
// console.log(variavel.toFixed() + '5')


// const preco = 2.99
// console.log(preco.toString(10))


// //transformar um numero em uma moeda
// let valor  = 48.49;
// //valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
// //valor = valor.toLocaleString('pt-SA', {style: 'currency', currency: 'RSA'})
// //valor = valor.toLocaleString('pt-MZ', {style: 'currency', currency: 'MZN'})

// console.log(valor)

// //OBJECTOS
// Math.round(5.1)
// const aleatorio = Math.floor(Math.random() * 10);
// console.log(aleatorio)

const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(numeroAleatorio)

let max = 0;
const numeros = '4, 5, 20, 8, 9';
// console.log(parseFloat(numeros))
const numeroArray = numeros.split(',')
numeroArray.forEach((item) => {

  
  max =  max + parseFloat(Math.max(item))
})
console.log(max)
const lista = Number.parseFloat(numeros)

console.log(Math.max(lista))