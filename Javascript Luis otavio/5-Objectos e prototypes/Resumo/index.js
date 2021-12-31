// outra forma de criar e com object.create(obj, defineproperty)
// Apartir dela voce pode criar um outro objectoque vai utilizar 
// as mesmas propriedades que as outras objectos tamem tem

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

// const honda = Object.create(carro);
// honda.init('Honda')

// console.log(honda.buzinar());

//  object.asign =  copia metodos e propriedades dos objectis
//  adiciona alvo as propriedades e metodos enumeraveis dos demais    objectos. o assign ira modificar o objecto alvo;

// const funcaoAutomovel = {
//   acelerar() {
//     return this.marca + " acelerou";
//   },
//   buzinar() {
//     return this.marca + " buzinou";
//   },
// };

// const moto = {
//   rotas: 2,
// };

// const carro = {
//   rotas: 4,
// };

// //SUBISTITUI SE JA TIVER UMA PROPRIEDADE COM O MESMO NOME
// Object.assign(moto, funcaoAutomovel);
// Object.assign(carro, funcaoAutomovel);

//Metodo define propreties

const moto = {
  rodas: 2,
};

// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     writable:false, //se for falso voce nao pode subscrever
//     configurable: false,//impede de deletar
//     enumerable:false,
//     get(){
//         return
//     }
//   },
// });

// Object.defineProperties(moto, {
//   rodas: {
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4;
//     },
//   },
// });

// moto.rodas = 1;

// console.log(moto.rodas);

// retorna os metodos e propriedade de cada construtor que fomos a colocar
Object.getOwnPropertyDescriptors(Array);

// Formas de mostrar as chaves e valores dos objectos

console.log(Object.keys(moto));
// retorna a chave do objecto

console.log(Object.values(moto));
//apenas os valores

//chave e valor
console.log(Object.entries(moto));

Object.getOwnPropertyNames(Array);

// Array(6) [ "isArray", "from", "of", "prototype", "length", "name" ]

Object.is(); // verifica se dois objectos sao iguais

const frutas1 = ["babana", "uuva"];
const frutas2 = ["babana", "uuva"];

console.log(Object.is(frutas1, frutas2));

// OBJect.freeze() - congela o objecto e impede qualqer mudanca nas propriedades

const carro = {
  marca: "ford",
  ano: 2019,
};

Object.freeze(carro)

console.log(Object.isFrozen())
// Object.seal() - define a adicao de novas propriedades e impede que as atuais sejam deletadas
Object.seal(carro)
console.log(Object.isSealed())


// object.prevetEXtensions() - previne a aicao de novas propriedades
Object.preventExtensions(carro)
// pergunta se e extensivel se esta previnido vc vai ser falso
console.log(Object.isExtensible())
