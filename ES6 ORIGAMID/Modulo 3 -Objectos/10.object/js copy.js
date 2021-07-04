// const pessoa = new Object({
//    nome:"andre",
// })

// console.log(pessoa.nome);

// const carro = {
//    rodas:4,
//    init(valor){
//       this.marca = valor
//       return this
//    },
//    acelerar: function(){
//       return this.marca + ' acelerou'
//    },
//    buzinar() {
//       return `${this.marca}  buzinou`
//    }
// }
// const honda = Object.create(carro).init('honda')

// console.log(honda.acelerar())

// const ferrar = Object.create(carro).init('ferrari')
// console.log(ferrar)


// const funcaoAutomovel = {
//    acelerar(){
//       return 'acelerou'
//    },
//    buzinar(){
//       return 'buzinou';
//    },
// }

// const moto = {
//    rodas:2,
//    capacete:true,
// }
// const automovel = {
//    rodas:4,
//    capacete:false,
// }
// console.log(Object.assign(moto, funcaoAutomovel))
// console.log(Object.assign(automovel, funcaoAutomovel))


// const moto = {
//    capacete:true,
// }
// console.log(moto)

// Object.defineProperties(moto, {
//    rodas:{
//       get() {
//        return  this._rodas;
//       },
//       set(){
//         return this._rodas = valor * 4
//       },
//    },
// })
// console.log(moto)
//const frutas = ['banana', 'uva'];

// console.log(Object.getPrototypeOf(frutas))

// const frutas1 = ['banana', 'pera'];
// const frutas2 = ['banana', 'pera'];

// console.log(Object.is(frutas1, frutas2))

// const carro = {
//    marca:'ford',
//    ano:2020,
// }

// Object.preventExtensions(carro)
// delete carro.marca;

// console.log(carro)



const frutas = ['banana', 'uva'];
const objecto = {

};
const somar = function(a,b){
   return a + b
}
console.log(frutas.toString())
console.log(somar.toString())

console.log(Object.prototype.toString.call(frutas))
console.log(Object.prototype.toString.call(somar))
console.log(Object.prototype.toString.call(objecto))