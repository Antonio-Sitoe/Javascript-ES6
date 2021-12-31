//i significa - index
// for (let i = 0; i <= 10; i++) {
//   const par = i % 2 === 0 ? 'E par' : 'E impar'
//   console.log(i, par)
// }
// const frutas = ['maca', 'pera', 'uva'];
// for (let i = 0; i < frutas.length - 1; i++) {
//   const fruta = frutas.includes('pera') ? 'E silvestre' : 'nao e';

//   console.log(frutas[i])
// }


const frutas = ['maca', 'pera', 'uva']

for (let i = 0; i < frutas.length; i++) {
  // const par = i % 2 === 0 ? 'par' : 'impar';
  // console.log(par)

  if (frutas[i] === 'pera') {
    break
  }
  console.log(frutas[i])
}