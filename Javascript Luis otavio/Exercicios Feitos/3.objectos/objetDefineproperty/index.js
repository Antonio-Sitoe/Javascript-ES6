// define property - define de uma vez
// defineProperties - essa define varias de uma vez

function Produto(nome, preco, estoque) {
  this.nome = nome; //propriedade publica
  this.preco = preco; // propriedade publica

  // definimos propriedade priada
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave quando iterar
    value: estoque, // o valor
    writable: true, // vc define se pode alterar ou nao
    configurable: false, // pode apagar a chave ou reconfigurar
  });
}

const camiseta = new Produto("camiseata", 20, 3);

console.log(Object.keys(camiseta));

/*===============================/**/

// defineProperties - essa define varias de uma vez

function Produto(nome, preco, estoque) {
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave quando iterar
      value: nome, // o valor
      writable: false, // vc define se pode alterar ou nao
      configurable: true, //
    },
    preco: {
      enumerable: true, // mostra a chave quando iterar
      value: preco, // o valor
      writable: true, // vc define se pode alterar ou nao
      configurable: false, //
    },
  });
  // definimos propriedade priada
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave quando iterar
    value: estoque, // o valor
  });
}

const camiseta = new Produto("camiseata", 20, 3);
camiseta.estoque = 9



console.log(camiseta);
