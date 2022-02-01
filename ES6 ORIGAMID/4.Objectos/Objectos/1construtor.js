const Dom = function (selector) {
  this.element = function () {
    return document.querySelector(selector);
  };
  this.ativar = function ativar(classe) {
    return this.element().classList.add(classe);
  };
};
const li = new Dom('li');
const ul = new Dom('ul');

console.log(li);
console.log(ul);

const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + 'andou');
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  console.log(this.nome + ' andou');
};

const joao = Pessoa('joao', 20);
const maria = Pessoa('maria', 25);
const bruno = Pessoa('bruno', 15);


