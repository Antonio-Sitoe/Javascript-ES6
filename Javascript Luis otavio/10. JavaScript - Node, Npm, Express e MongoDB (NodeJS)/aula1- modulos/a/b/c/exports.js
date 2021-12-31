// const nome = "Antonio";
// const fala = () => {
//   return nome + " " + "Sitoe";
// };

// // usamos para exportar coisas
// // module.exports.nome = nome;
// // module.exports.fala = fala;

// // export
// exports.nome = nome;
// exports.fala = fala;

// // this
// this.qualquerCoisa = 'helloo wrod'

// // se nao exportamos.

// class Pessoa {constructor(nome) {this.nome = nome}}

// module.exports = {Pessoa}

const latir = require("../../../app");
const dog = new latir();
dog.latir();

//  variaveis internas

// console.log(__filename)
// console.log(__dirname)

const path = require("path");
console.log(path.resolve(__dirname, ".."));
