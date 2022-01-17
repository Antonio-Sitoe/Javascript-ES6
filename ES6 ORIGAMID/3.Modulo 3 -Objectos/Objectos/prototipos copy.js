//  prototipo e ligado a funcoes
// Prototype

function Teste(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.Matematica = function () {
    console.log(this.nome);
  };
}

const teste = new Teste('Antonio', 'idade');
teste.Matematica();
const pais = 'Brazil';
console.log(pais.indexOf('z'));

const lista = document.querySelectorAll('li');

const ArrayLIsta = Array.from(lista);
console.log(ArrayLIsta);

const Carro = {
  portas: 4,
  marca: 'ford',
  preco: 1200,
  andar() {
    return true;
  },
};



