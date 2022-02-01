// /*==============================*/
// const carro = {
//    marca: "marca",
//    preco: 0,
// }
// /*==============================*/
// const honda1 = carro;
// honda1.preco = 2500;
// /*==============================*/
// const fiat2 = carro;
// fiat2.marca = "fiat";
// fiat2.preco = 30;
// /*==============================*/
// function Carro(marca, preco) {
//    this.marca = marca;
//    this.preco = preco;
//    this.andar = function () {
//       console.log("andou")
//    }
// }
// const honda = new Carro('honda', 300);

// const fiat = new Carro('fiat', 2500);
// fiat.marca = "fiat"

// function Carro2(marca, precoIn) {
//    const taxa=1.2;
//    console.log(this)
//    this.marca = marca;
//    console.log(this)
//    this.precoFinal = precoIn * taxa;
//    console.log(this)
//    this.andar = function () {
//       console.log("andou")
//    }
//    console.log(this)
// }
// const mazda = new Carro2('mazda',5000)
// /*==============================*/
// const Dominic = {
//    selector: 'li',
//    element() {
//       return document.querySelector(this.selector)
//    },
//    ativar() {
//       this.element().classList.add('ativar')
//    }
// }
// function Dom(selector) {
//    this.selector = selector,
//       this.element = function () {
//          return document.querySelector(this.selector)
//       },
//       this.ativar = function (classe) {
//          this.element().classList.add(classe)
//       }
// }
// const li = new Dom('.euvou');
// li.ativar('ativar')



const pessoa = {
   nome: "Nome Pessoa",
   idade: 0,
   andar() {
      console.log(this.nome + " andou")
   }
}

function alguem(Nome, idade) {
   this.nome = Nome;
   this.idade = idade,
      this.andar = function () {
         console.log(`${this.nome} anodu`)
      }
}

const joao = new alguem("Joao", 20)
const Maria = new alguem("Maria", 25)
const bruno = new alguem("Bruno", 15)
console.log(joao)
console.log(Maria)
console.log(bruno)


function Dom() {
   const elements = document.querySelectorAll('li');
   this.addClass = function (item) {
      elements.forEach((classe) => {
         classe.classList.add(item)
      })
   };
   this.removeClass = function (item) {

      elements[0].classList.remove(item)

   };
}
const li = new Dom()
li.addClass('ativar');
li.removeClass('ativar')
