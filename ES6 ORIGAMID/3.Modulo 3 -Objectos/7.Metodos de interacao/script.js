// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
// const sections = document.querySelectorAll('.curso')
// const arrayCursos = Array.from(sections);
// const object = arrayCursos.map((item)=>{
//    const titulo = item.querySelector('h1').innerText;
//    const descricao = item.querySelector('p').innerText;
//    const aulas = item.querySelector('.aulas').innerText;
//    const horas = item.querySelector('.horas').innerText;
//    return {
//       titulo,
//       descricao,
//       aulas,
//       horas
//    }
// })
// console.log(object)
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maior = numeros.filter(n => n > 100)

console.log(maior)


// Verifique se Baixo faz parte 
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria',
   'Teclado']

   const possui = instrumentos.some((item)=>{
      return item === 'Baixo'
   })


// Retorne o valor total das compras 
const compras = [
   {
      item: 'Banana',
      preco: 'R$ 4,99' 
   },
   {
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

const valorTotal = compras.reduce((acumulador, item)=>{
   const precoLimppo = +item.preco.replace('RS  ', ' ').replace(',', '.');
   return acumulador + precoLimppo
}, 0)


console.log(valorTotal)