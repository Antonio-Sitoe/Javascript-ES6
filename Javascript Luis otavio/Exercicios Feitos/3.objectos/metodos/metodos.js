// Object.defineProperties
// Object.defineProperty

const livros = {
  paginas: 55,
  editora: "Plural editores",
};

// object.assign
const romance = Object.assign(livros);
const comedia = { ...livros };
// console.log(comedia)
// (spread)
romance.paginas = "60";
romance.editora = "EM 2021";

// console.log(Object.getOwnPropertyNames(caneca))- retorna um array com as chaves
// console.log(Object.getOwnPropertyNames(livros))

//  um array com as chaves
// console.log(Object.keys(livros))

// Object.preventExtensions(caneca); // previne o aumento
// Object.preventExtensions(livros)

// livros.anoLancamento = 2021;


console.log(Object.preventExtensions(livros))

// Object.isExtensible;
console.log(Object.isExtensible(window))





// object.create - cria novos objectos
const manga = Object.create(livros);

// Object.freeze - privine de tudo a modificacao
// Object.freeze(livros)
// delete livros.paginas

// Object.isFrozen;
// console.log(Object.isFrozen(livros))

//object.getOwnProPERTYdESCRIPTOR

// console.log(Object.getOwnPropertyDescriptors(livros)); - nos ajuda a ver o estado de cada propriedade ou metodo

// object.keys - retorna todas as chaves dos objectos
// console.log(Object.keys(livros))

// Object.values - retorna os valores dos objectos
// console.log(Object.values(livros))

// object.entriess - retorna uma matriz de arrays dentro contendo chaves e valores
// console.log(Object.entries(livros))
