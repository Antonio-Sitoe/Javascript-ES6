// console.log(Number.parseFloat('99.50'))

// console.log(Number.parseInt('99.50', 10))
// const preco = 2.99
// console.log(preco.toFixed())

// const carro = 100.444
// console.log(carro.toLocaleString())

// let valor = 48.49

// valor = valor.toLocaleString('pt-MZ', {style: 'currency', currency: 'MZN'})
// console.log(valor)

// console.log(Math.PI.toFixed(2))
// console.log(Math.PI.toFixed(2))

// const p = 4.2

// console.log(Math.ceil(p))

// const aleatorio = match.floor(match.random() * 10);
// console.log(aleatorio)





//======Exercicios
const NumeroAleatorio = Math.floor(Math.random() * (5) + 1)
console.log(NumeroAleatorio)

const listaPrecos = ['RS 59,99', 'RS 100,222', 'RS 230', 'rs 200'];

function limparPreco(preco) {
   preco = +preco.toUpperCase().replace('RS', '').trim().replace(',', '.')
   preco = +preco.toFixed(2);
   return preco;
}
let soma = 0;
listaPrecos.forEach((preco) => {
   soma += limparPreco(preco);
})
limparPreco(listaPrecos[1])






















