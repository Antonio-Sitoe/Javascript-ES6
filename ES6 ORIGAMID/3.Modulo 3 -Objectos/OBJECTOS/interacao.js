/*===============================================================================================================================*/
// const carros = ['ford', 'fiat', 'honda']
// carros.forEach((item, index, array) => {
//   console.log(item.toLocaleUpperCase())
// })
// console.log(carros)
/*===============================================================================================================================*/

// const li = document.querySelectorAll('li')


// const retorno = li.forEach((item) => {
//   item.classList.add('ativa');
// })

// console.log(retorno)


/*===============================================================================================================================*/
// const carros = ['ford', 'fiat', 'honda']

// const novaArray = carros.map((item, index, array)=>{
//   console.log(item.toUpperCase(), index, array)
//   return item.toUpperCase()
// })
// console.log(carros)
// console.log(novaArray)


// const numeros = [2,4,5,6,78]
// const numerosX2 = numeros.map(n => n * 2);
// console.log(numerosX2);






/*===============================================================================================================================*/

// const aulas = [
//   {
//     nome: 'html',
//     min: 15
//   },
//   {
//     nome: 'html',
//     min: 10
//   },
//   {
//     nome: 'html',
//     min: 20
//   },
//   {
//     nome: 'html',
//     min: 5
//   },
// ]


// const nomeAula = function (aula) {
//   return aula.nome
// }

// const tempoAulas = aulas.map(aula => aula.min)
// function nomeAulas(aula) {
//   return aula.nome
// }
// const arrayNome = aulas.map(nomeAulas)
// console.log(nomeAula)



/*===========================================================================
//====================================================*/

//acumulador e o retorno da interacao anterior



// const ReduceAulas = aulas.reduce((acumulador, item) => {
//  console.log(acumulador, item)
//   return acumulador + item
// })

// console.log(ReduceAulas)

/*===============================================================================================================================*/
// const numeros = [10, 25, 30, 22, 46];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   if (anterior > atual)
//     return anterior
//   else
//     return atual
// })

// console.log(maiorNumero)


// // /*===============================================================================================================================*/

// // const aulas = [
// //   {
// //     nome: 'html',
// //     min: 15
// //   },
// //   {
// //     nome: 'html',
// //     min: 10
// //   },
// //   {
// //     nome: 'html',
// //     min: 20
// //   },
// //   {
// //     nome: 'html',
// //     min: 5
// //   },
// // ]

// // var acumulador = {}
// // acumulador[0] = 'ghhj'

// // const listaAulas = aulas.reduce((acumulador, aula, index) => {
// //   console.log(aula)
// //   acumulador[index] = aula.nome
// //   return acumulador;
// // }, {})

// /*===============================================================================================================================*/


// const frutas = ['uva', 'banana', 'pessego']

// const indexUva = frutas.find((item) => { return item === 'banana' })
// console.log(indexUva)

// // const temUva = frutas.some((item, index, array) => {
// //   return console.log(item === 'uva')
// // })

// // console.log(temUva)

// /*===============================================================================================================================*/
// const every = frutas.every((item) => {
//   return frutas
// })

// console.log(every)

// /*===================================================================================================================================================*/

// const numbers = [6, 8, 9, 10, 35, 25, 69]

// const Maior = numbers.every(n => n >= 3)
// console.log(Maior)

// /*===============================================================================================================================*/

// const frutas1 = ['banana', undefined, null, '', 'iva']
// const frutasFilter = frutas1.filter((item) => {
//   console.log(item)
//   return item === 'banana'
// })


// console.log(frutasFilter)
// /*===============================================================================================================================*/


// const aulas = [
//     {
//       nome: 'html',
//       min: 15
//     },
//     {
//       nome: 'html',
//       min: 110
//     },
//     {
//       nome: 'html',
//       min: 20
//     },
//     {
//       nome: 'html',
//       min: 25
//     },
//   ]

//   const maiores15 =  aulas.filter((aula)=>{
//     console.log(aula.min)
//     return aula.min > 15
//   })

//   console.log(maiores15)

/*=============================================================================================================================
======================================================================================================================================================================================================================================================================================================================*/

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso


const cursos = Array.from(document.querySelectorAll('section.curso'))
console.log(cursos)

const objectoCursos = cursos.map((item) => {
  const titulo = item.querySelector('h1').innerText;
  const decricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('.aulas').innerText;
  const horas = item.querySelector('.horas');
  return {
    titulo,
    decricao,
    aulas,
    horas,
  }
})

console.log(objectoCursos)


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQ = numeros.filter((item) => item > 100)
console.log(maiorQ)

// Verifique se Baixo faz parte 
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria',
  'Teclado']

const fazParte = instrumentos.some(item => { return item === 'Baixo' })
console.log(fazParte)


// Retorne o valor total das compras 
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  }, {

    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
const valorTotal = compras.reduce((acumulador, item) => {
  let preco = parseFloat(item.preco.slice(2).trim().replace(',', '.'))

  return acumulador + preco; 
}, 0)

console.log(valorTotal)