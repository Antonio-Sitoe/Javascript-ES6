// const array = [1, 2, 3]


// array.push(4);
// array[1]='hello'

// console.log(array)



// const pessoal = {
//   nome: 'Antonio',
//   sobrenome: 'Sitoe',
//   idade: 25,
// };


// const pessoal1 = {
//   nome: 'Antonio',
//   sobrenome: 'Sitoe',
//   idade: 25,
// };

// console.log(pessoal.nome);

criaPessoa = (nome, sobrenome, idade) => {
  return {
    nome,
    sobrenome,
    idade
  }
};

const pessoa1 = criaPessoa('Antonio', 'sitoe', 26)
const pessoa2 = criaPessoa('Edilson', 'Manuel', 13)
console.log(pessoa1)
console.log(pessoa2)