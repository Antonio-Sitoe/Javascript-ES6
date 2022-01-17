// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
const lix = document.querySelectorAll('li')

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
// Liste os construtores dos dados abaixo


const li = document.querySelector('li');
li;  //'HTMLLIElement'
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click(); // Qual o construtor do dado aba
