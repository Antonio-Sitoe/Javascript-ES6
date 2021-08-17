function produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
produto.prototype.aumento = function (quantia) {
  return (this.preco += quantia);
};
produto.prototype.desconto = function (quantia) {
  return (this.preco += quantia);
};

// cada funcao construtora tem a sua prototype
function Camiseta(nome, preco, cor) {
  produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(produto.prototype);
Camiseta.prototype.construtor = Camiseta;

const camisa = new Camiseta("Regata", 7.5, "preta");

function Caneca(nome, preco, cor, material) {
  Camiseta.call(this, nome, preco, cor);
  this.material = material;
}

Caneca.prototype = Object.create(Camiseta.prototype);
Camiseta.prototype.construtor = Caneca;

const caneca = new Caneca("Bounbina", 500, "branca", "plastico");

console.log(caneca);
