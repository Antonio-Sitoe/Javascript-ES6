// classe e a mesma coisa da funcao construtora mais elasa fazem a mesma coisa
class Pessoa {
  //metodo especial executado sempre que usamos a classe
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  //os metodos estao todos no prototipo autoaticamente
  falar() {
    console.log(this.nome + " falou");
  }
  comer() {
    console.log(this.nome + " comeu");
  }

  beber() {
    console.log(this.nome + " bebeu");
  }
}

const p1 = new Pessoa("tony", "sitoe");

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  return this.nome + " falou";
};

const p2 = new Pessoa2('victor', 'matimbe')

console.log(p1)
console.log(p2)
// const p2 = new Pessoa("jaoao", "sitoe");
// const p3 = new Pessoa("sonia", "sitoe");
// const p4 = new Pessoa("will", "sitoe");
// nao podes esquecer a palavra new

// o javascript otimiza os codigo

// console.log(p1);
// console.log(p4);
// console.log(p3);
// console.log(p2);
