// const verdadeira = true

// let nome = 'luiz';
// var nome1 = 'luiz';

// var nome1 = 'otavio';

// console.log(nome, nome1)


// var sobrenom = 'miranda';

// function falaoi() {
//   var sobrenom = 'sobrenome'

// }
// falaoi()
// console.log(sobrenom)
// if (verdadeira) {
//   let nome = 'otavio'; //let tem um escopo de bloco //var so tem escopo de funcao

//   if (true) {
//     let nome = 'outra coisa'
//     console.log(nome, nome1)
//   }

// }

// const pessoa = {
//   nome: "antonio",
//   sobrenome: 'sitoe',
//   idade: 5,
//   endereco: {
//     rua: 'Av 3 de fevereiro',
//     Numero: 320,
//   }
// };


// const {
// nome,...rest
// } = pessoa;


// console.log(nome,rest);


// let a = 'A';
// let b = 'B';
// let c = 'c';


// const numeros = [b, c, a];
//   [a, b, c] = numeros; //atribuicao via desestruturacao

// console.log(a, b, c)


// const numeros = [
//   [100, 200, 300],
//   [400, 500, 600],
//   [700, 800, 900]
// ];

// const [primeiro, segundo, terceiro] = numeros;
// console.log(primeiro[2], segundo[0]);
// console.log(segundo[2]);




const pessoa = {
  nome: 'Antonio',
  sobrenome: 'sitoe',
  idade: 24,
  endereco: {
    rua: 'Av 3 de feverior',
    numero: 32,
  },
};

const { nome,...rest} = pessoa;
console.log(nome,rest)