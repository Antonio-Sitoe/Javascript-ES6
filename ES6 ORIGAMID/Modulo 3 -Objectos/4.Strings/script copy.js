// const comida = 'pizza'
// const agua = new String('agua')
// console.log(agua)

// const frase = 'a melhor comida';
// console.log(frase[frase.length - 1])
// console.log(frase.charAt(0))


// const frase = 'A melhor linguagem e '
// const linguagem = `javascript`

// const fraseCompleta = frase.concat(linguagem, `!!`, `nao tem hello world`);

const fruta = `banana`
const listafrutas = `melancia. banana, turanja`;
// console.log(listafrutas.includes(fruta))


console.log(fruta.lastIndexOf('na'))


const transacao1 = 'deposito de cliente';
const transacao2 = 'deposito de fornecedor';
const transacao3 = 'taxa de camisas';

console.log(transacao1.slice(0, -2))

const preco = [
   `99`,
   `258`,
   `12555`
]

preco.forEach((item) => {
   console.log(item.padStart(10, '-'))
})
//reapeat
const ta = 'ta'
console.log(ta.repeat(5)) 
//replace
const listaItens = 'camisas bones calsa bermudas vestidos'
const ArrayLista = listaItens.split(', ');

console.log(ArrayLista)


