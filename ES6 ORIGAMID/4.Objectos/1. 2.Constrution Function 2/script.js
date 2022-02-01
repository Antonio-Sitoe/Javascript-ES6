// function carro(marca, precoInicial) {
// //    const taxa = 1.2;
// //    const precoFinal = precoInicial * taxa
// //    this.marca = marca;
// //    this.preco = precoFinal;
// // }

// // const honda = new carro('honda', 3000);


// // const Dom = {
// //    selector:'li',
// //    element(){
// //       return document.querySelector(this.selector)
// //    },
// //    ativar() {
// //       return this.element().classList.add('ativar')
// //    }
// // }
// // Dom.selector = 'li';
// // Dom.ativar();
// // //devemos aproveitar o 


// function Dom(selector) {
//    this.element = function(){
//       return document.querySelector(selector)
//    };
//    this.ativar =  function(classe) {
//       return this.element().classList.add(classe)
//    };
// }
// const elementoLi = new Dom('li')
// const ul = new Dom('ul')
// const LiLast = new Dom('li:last-child')
// LiLast.ativar('ativar')


const nome = {
   pessoa: 'nome da pessoa',
   idade: 0,
   andar() {
      console.log(this.nome + ' andou')
   }
}
function pessoa(nome, idade) {
   this.nome = nome;
   this.idade = idade;
   this.andar = function () {
      console.log(`${this.nome} andou`)
   }
}
const joao = new pessoa('joao', 20)
const maria = new pessoa("maria", 25)
const bruno = new pessoa("bruno", 15)

//crie uma construtor funcition para anipular a lisata de eementos
//deve conter os elemetos addClasse e removeClass para adicionar e remover 

function Dom(selector) {
   this.elements = function () {
      return document.querySelectorAll(selector)
   }
   this.addClasse = function (classe) {
      this.elements().forEach((event) => {
         event.classList.toggle(classe)
      })
   };
   this.removeClasse = function (classe) {
      this.elements().forEach((event) => {
         event.classList.toggle(classe)
      })
   };
}
const mani = new Dom('li')
mani.addClasse('ativar')
mani.removeClasse('ativar')
















































