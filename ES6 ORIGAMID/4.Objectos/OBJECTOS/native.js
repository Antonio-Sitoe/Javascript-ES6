const fruta = 'banana'
const lista = "banana maca pera"


console.log(fruta.includes(lista))
console.log(fruta.endsWith('na'))
console.log(fruta.slice(0,3))
console.log(fruta.indexOf('na'))
console.log(fruta.lastIndexOf('n'))


const preco = ['RS 99',"RS 300"]
preco.forEach((item)=>{
  console.log(item.padStart(10))
})

