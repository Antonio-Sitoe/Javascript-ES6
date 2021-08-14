// // quando importamos importamos o modulo inteiro
// const { Pessoa } = require("./exports");

// const tony = new Pessoa("tony");

// console.log(tony);
// // podemos importar uma funcao expecifica
// // modulos padrao do node nao requer caminho

// const path = require("path");

// const axios = require("axios");

// axios("https://www.otaviomiranda.com.br/files/json/pessoas.json").then(
//   (response) => console.log(response.data())
// );

module.exports = class animal {
  latir() {
    console.log("latio");
  }
};
