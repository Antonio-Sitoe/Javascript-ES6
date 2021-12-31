// objecto literal
const pessoa = {
  //corpo de objecto
  nome: /*chave */ "Antonio" /*valor*/,
};

// console.log(pessoa["nome"]);
//devemos usar o que resolver no momento
// a notacao de ponto e mais intuitiva e mais simples

// construtor de objectos
const pessoa1 = new Object({ nome: "antonio", sobrenome: "sitoe" });
pessoa1.idade = 20;

// existe a notacao de colchetes - objectos podem conter metodos
// as vantagem das funcoes ou metodos estarem dentro dos
// objectos e que podemos acessar as propriedades nessa funcao

pessoa1.falarNome = function () {
//   console.log(this.nome, " falou");
};

pessoa1.falarNome();

pessoa1.WasBorn = function () {
  const date = new Date();
  return date.getFullYear() - this.idade;
};

// console.log(pessoa1.WasBorn());

// Manipular valores dentro dos objectos
// iterar em objecctos

for (let chave in pessoa1) {
//   console.log(chave, pessoa1[chave]);
}

// Temos dois tipos de funcoes que sao moldes de
// objetos !

// fatory function /

// construtor functions
// os dois sao padroes de projectos !

function Pessoas(name, anotherName) {
  this.name = name;
  this.anotherName = anotherName;
}

const p1 = new Pessoas("Luiz", "Miranda");
/* 
 a palavra new cria um objecto vazio
 pega o this e atribui ao novo objecto 
 criado apartir do new

 

*/

// classes em javascript para criar novos objectos !1
