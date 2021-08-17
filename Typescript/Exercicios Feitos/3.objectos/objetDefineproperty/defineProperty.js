// Object.defineProperty() - // uma so propriedade
// Object.defineProperties() - // varias propriedades propriedade

function CriaArtigos(nome, preco, estoque) {
  const name = Object.defineProperties(this, {
    nome: {
      value: nome,
      writable: false,
      enumerable: false,
      configurable: true,
    },
    preco: {
      value: preco,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  });

  return {
    nome: name.nome,
    preco: name.preco,
    estoque,
  };
}

const camisete = CriaArtigos("camisete", 500, 3);
const blusa = CriaArtigos("blusa", 700, 8);

console.log(camisete);

console.log(blusa);

// 1 - o objecto que estamos em questao
// 2 - a propriedade em questao,
// 3 -  definicao da propriedade

// Object.defineProperty(camisete, "estoque", {
//   value: 40,
//   enumerable: true, // define se podemmos acessar essa propriedade
//   writable: false, // definimos se podemos reenscrever ou alterar
//   configurable: true, //definimos se podemos apagar, ou reconfigurar
// });

// delete camisete.estoque;
