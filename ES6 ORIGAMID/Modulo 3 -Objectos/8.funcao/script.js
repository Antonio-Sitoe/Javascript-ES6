// function somar(d1, d2) {
//    return d1 + d2
// }
// console.log(somar.length)//total de argumentos
// console.log(somar.name)//Nome da funcao

// //METODOS DAS FUNCOES

// function daroi(nome) {
//    return "oi" + nome
// }

// console.log(daroi.call({}, 'tony'))

// function desc(veloci) {
//    console.log(this)
//    console.log(window.marca +''+window.ano +veloci)
// }
// desc.call({marca:'honda', ano:2015}, 100)

// const carro = ['ford', 'mustang', 'vw']
// const frutas = ['banana', 'uva', 'pera']

// carro.forEach.call(frutas,(item)=>{
//    console.log(item)
// })

// function dom(selector){
//    this.element = document.querySelector(selector);
// }

// dom.prototype.ativo = function(classe){
//    this.element.classList.add(classe)
// }

// // const ul = new dom('ul')
// const li={
//    element:document.querySelector('li')
// }
// //ul.ativo.call({},'ativar');
// li.ativo('ativar');

// dom.prototype.ativo()
// // console.log(ul)


const frutas1 = ['banana', 'uva', 'pera']
frutas1.pop();
console.log(frutas1)


const arrrayLike = {
   0:'item 0',
   1:'item 1',
   2:'item 2',
   3:'item 3',
   4:'item 4',
   length: 5,
}
const li = document.querySelectorAll("li")

const filter = Array.prototype.filter.call(li, (item) =>{
   item.classList.contains('ativo')
})

console.log(filter);
console.log(li)