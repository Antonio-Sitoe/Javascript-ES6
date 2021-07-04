// const comida = 'pizza';
// const agua = new String('agua')
// // console.log(comida.length)
// // console.log(comida[0])
// const frase =   `a melhor comida e `
// // console.log(frase[frase.length - 1])
// // console.log(frase.charAt(frase.length - 1))
// const fraseFinal = frase.concat(comida)
// // console.log(fraseFinal)

// const frutas = 'Banana';
// const Lista = ['Banana', `laranja`, `turannja`]

// // console.log(Lista.includes(frutas ,0 ))

// // console.log(frutas.startsWith('Ba'))


// //slice


// const transacao1 = "deposito do cliente"
// const transacao2 = "deposito ao Fonerncedor"
// const transacao3 = "taxa do camisas"


// // console.log(transacao1.slice(0))

// const nome = `Antonio Sitoe`;

// // console.log(nome.toLowerCase())
// // const h = nome.toLowerCase().slice(1, )
// // t = 'A'
// // console.log(t.concat(h))

// console.log(frutas.indexOf('nana'))


// const lista = [`R$ 99`,`R$ 129`,`R$ 1200`,]
// lista.forEach((item)=>{
//   console.log(item.padStart(10, '*'))
// })

// const preco = `R$ 99`

// console.log(preco.padStart(20, '.'))




// const frase2 = ' t a '
// console.log(frase2.trim())







// console.log(frase2.repeat(5))

// const listaItens = 'camisas bones bermudas vestidos saias';
// const listaItens2 = listaItens.replace(/[ ]+/g, ', ')

// const arrayLista = listaItens2.split(', ')
// listaItens2.split()

// console.log(arrayLista)


// const htmltext = `<div>A melhor itm</div><div>A melhor lista</div>`;
// const arrytext = htmltext.split('div')
// const novoHtml = arrytext.join('section')
// console.log(novoHtml)

// const arrayFrutas = ['banana', 'melancia', 'laranja']
// console.log(arrayFrutas.join(',  '))


// const sexo ='feminino';
// const sexo2 = 'Feminino';



// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {

    descricao: 'Recebimento de cliente',
    valor: 'R$ 49',
  },
];
let totaltaxa = 0;
let totalRecebimento = 0;
transacoes.forEach((item) => {
  if (item.descricao.startsWith('Rec')) {
    const soma = Number(item.valor.slice(3))
    totaltaxa += soma
  } else if (item.descricao.startsWith('Taxa')) {
    const itsNumber = Number(item.valor.slice(3));
    totalRecebimento += itsNumber
  }
})
console.log(totaltaxa)
console.log(totalRecebimento)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const ArrayTras = transportes.split(';')
console.log(ArrayTras)

// Substitua todos os span's por a's
const html = `<ul>
              <li><span>Sobre</span></li>
              <li><span>Produtos</span></li>
              <li><span>Contato</span></li>
            </ul>`;

console.log(html.split('span').join('a'))

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(13))

// Retorne o total de taxas
const transacoes1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let i = 0
transacoes1.forEach((item) => {
  const nome = item.toLowerCase().trim();
  if (nome.startsWith('taxa')) {
    i++
  }
})

console.log(i)
