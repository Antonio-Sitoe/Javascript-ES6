const carro = {
  marca: 'Marca',
  preco: 0,
};

const honda = carro;

const fiat = carro;
fiat.marca = 'fiate';
fiat.preco = 200;

//  funcao construtora
// faz referencia a ela mesma usando this

function Carros(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const hondas = new Carros('HOnda', 50);
hondas.teste = 'oi';

hondas.andar = function () {
  return 'andou';
};

const fiats = new Carros('fiate0', 600);

// this faz referencia ao objecto construido

function Carr(marca, pI) {
  const taxa = 1.2;
  const pF = pI * taxa;
  this.marca = marca;
  this.preco = pF;
  console.log(this)
}

const mazda = new Carr('Mazda', 200_000);


