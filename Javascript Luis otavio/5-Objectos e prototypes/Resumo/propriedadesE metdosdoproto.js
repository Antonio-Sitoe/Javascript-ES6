// ja que tudo em javascript e objecto, as propriedades abaizo estao disponiveis em todos objectos crados apartir de funcoes construtoras. retorna a funcao construtora do objecto;

const frutas = ["hellor", "uva"];

// console.log(frutas.constructor)

// hasOwnProperty - verifica se possui a propriedade
// Object.getOwnPROPERTYNAMES

// console.log(frutas.hasOwnProperty('map'))

Array.prototype.isPrototypeOf(Array);

// Metodo toString - existe nos em vairas

console.log(frutas.toString());


function DataType(data) {
  return Object.prototype.toString.call(data);
}



console.log(DataType(Math));

const quadrado = {
  lados: 4,
};
Object.freeze(quadrado);
quadrado.metade = 2;
quadrado.lados = 5;
delete quadrado.lados;



const configuracao = {
  width: 800,
  Height: 600,
  background: "#333",
};

Object.defineProperties(configuracao, {
  width: {
    enumerable: true,
    configurable: false,
    writable: false,
  },
  Height: {
    enumerable: true,
    configurable: false,
    writable: false,
  },
  background: {
    enumerable: true,
    configurable: false,
    writable: false,
  },
});



console.log(configuracao);

