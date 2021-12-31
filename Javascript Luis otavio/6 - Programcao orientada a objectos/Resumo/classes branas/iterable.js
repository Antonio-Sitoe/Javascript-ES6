// sao convecoes inplimetadas por arrays, maps, sets e strings que tonrm interaveis por mieo de um protoclo de iteracao

//objectos que representam um conjunto de elementos,

// const language = [["fortra"], "lisp", "cobol"];
// const modern = ["pyton", "ruby", "javascript"];

//for classico
// for (let i = 0; i < language.length; i++) {
//   console.log(language[i]);
// }

//for in serve ara percorrer as chaves de um objecto

// for (let i in language) {
//   console.log(language[i]);
// }

// for each
// language.forEach((i) => console.log(i));

//for of - deve ser iterator - iterra arrays
// o objecto que esta sendo iterrado deve ser iterator

// const langueges = [...language, ...modern];

// for (let i of langueges) {
//   console.log(i);
// }

/// alem de arrray nos podemos usar esse protocolo com map set e strngs
// convecoes que iterram

// const language = new Map([
//   ["fortra", 1957],
//   ["lisp", 1958],
//   ["cobol", 1959],
// ]);
const language = new Set([
  ["fortra", 1957],
  ["lisp", 1958],
  ["cobol", 1959],
]);

const modern = ["pyton", "ruby", "javascript"];

for (let char of modern) {
  console.log(char);
}
const languages = [...modern, ...language];

const iterator = modern[Symbol.iterator](); //pega os values
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// todo o iterable tem uma porpriedade de chave simbol.itarator

//

function CreatIterator() {
  return {};
}

const iterators = CreatIterator("fortran", "lisp", "cobol");

console.log(iterators.next())