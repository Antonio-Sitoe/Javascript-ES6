// // criar propriedades privadas que ninguem pode trabalhar nela ou mencher

// // Simbol -  pode ser utilizado para criar uma chave privada
// const _velocidade = Symbol();
// // a cada vez que e chamar ela execura algo aleatorio

// class Carro {
//   constructor(nome) {
//     this.nome = nome;
//     this[_velocidade] = 0;
//   }

//   set velocidade(value) {
//     if (typeof value !== "number") return;
//     if (value >= 100 || value <= 0) return;
//     return (this[_velocidade] = value);
//   }

//   get velocidade() {
//     return this[_velocidade];
//   }

//   acelerar() {
//     if (this[_velocidade] >= 100) return;
//     this[_velocidade]++;
//   }

//   frear() {
//     if (this[_velocidade] <= 0) return;
//     this[_velocidade]--;
//   }
// }

// const carro = new Carro("fusca");

// // for (let i = 0; i <= 200; i++) {
// //   carro.acelerar();
// // }
// carro.velocidade = 99;
// console.log(carro.velocidade);

//os getter e seter servem
// geter - quando acessas o valor da funcao
//setter -  quando atribuis um valor a algo

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }

  set nomeCompleto(value) {
    value = value.split(" ");
    this.nome = value.shift();
    this.sobrenome = value.join(" ");
  }
}

const p1 = new Pessoa("Luiz", "Miranda");

p1.nomeCompleto = 'Luiz Miranda Otavio'

console.log(p1.nomeCompleto);
