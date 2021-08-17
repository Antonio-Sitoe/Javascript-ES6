// fazer um metodo da funcao simular que ele e uma propriedade
// maneira de proteger uma propriedade
// geralmente o valor de getter e gerar o valor e retornar ele

// e possivel definirmos diferentes coportamneos para get e sett de um propriedade, 
//

// function Produto(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;

//   let estoquePrivado = estoque;
//   Object.defineProperty(this, "estoque", {
//     // o valor
//     writable: true, // vc define se pode alterar ou nao
//     configurable: true, //
//     get: function () {
//       return estoquePrivado;
//     },
//     set: function (valor) {
//       estoquePrivado = valor;
//       return estoquePrivado;
//     },
//   });
// }

// const p1 = new Produto("camisa", 20, 3);

// console.log(p1.estoque);

// function CriaP(nome) {
//   return {
//     get nome() {
//       return nome;
//     },
//     set nome(valor) {
//       nome = valor;
//     },
//   };
// }

// const p2 = CriaP("camiseta");
// p2.nome = 'qualquer coisa'
// console.log(p2.nome);

// object.create - cria um novo objecto baseado num outro objecto
