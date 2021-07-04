const h1 = document.querySelector('h1')
const animais= document.querySelector('.animais-lista')


h1.outerHTML ="<p>Novo</p>"

const lista =document.querySelector('.animais-lista')

console.log(lista.children[lista.children.length-1])
console.log(lista.querySelector("li:last-child"))

//toda av tag html e um elemento
console.log(lista.childNodes)