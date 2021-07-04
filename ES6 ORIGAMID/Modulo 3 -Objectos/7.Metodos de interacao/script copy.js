// // //  metodo forEACH

// // const carros = ['ford', 'fiat', 'bmw']

// // carros.forEach(function(item, index, array){
// //    console.log(item.toUpperCase(),index,array)
// // })

// // console.log(carros)


// // const li = document.querySelectorAll('li')

// // const reutn = li.forEach((item)=>{
// //    item.classList.add('ative')
// // });

// // console.log(reutn)

// const fruta = ['banana', 'pera', 'uva']
// const tem = fruta.every((fruta) => {
//    console.log(fruta)
//    return fruta
// })
// console.log(tem)

// const maior = [6, 23, 28,101]

// const maiorQ = maior.every(n => n >= 6)

// console.log(maiorQ)



// const indexUva = fruta.findIndex(item=>{
//    return item ==='uva'
// })

// console.log(indexUva)
//============================================///
//=========== FIND


const fruty = ['banana', undefined, null, '', 'uva', 0, 'Maca'];

const arrayFrutas = fruty.filter((item) => {
   console.log(item)
   return item === 'banana'
})

console.log(arrayFrutas)

const aulas = [
   {
      nome: 'html 1',
      min: 15
   },
   {
      nome: 'html 2',
      min: 10
   },
   {
      nome: 'CSS 1',
      min: 15
   },
   {
      nome: 'Js 1',
      min: 15
   }
]

const maires = aulas.filter(aula => {
   console.log(aula.min)
   return aula.min >= 15;
})

console.log(maires)