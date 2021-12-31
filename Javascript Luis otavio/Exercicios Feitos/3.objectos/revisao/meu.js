// criacao de objectos | objectos literais

const city = {
  nome: "Maputo",
  distrito: "Boane",
};

city.localidade = "Cidade santa";

// acessar objectos
// console.log(city["nome"]);

// criacao de construtor
const aviao = new Object({
  marca: "Qatar",
  numero: 9654,
  distino: "Europa",
});

aviao.tempoViagem = 1;

// criacao de metodos nos objectos

aviao.voar = function () {
  return `${this.marca} voou ao distino de ${this.distino}`;
};

aviao.chegou = function () {
  return `${this.voar()} e chegou em ${this.tempoViagem} hora `;
};

// iteracao nos objectos

// for (let qatar in aviao) {
//   console.log(qatar, aviao[qatar]);
// }

// moldes de objectos
// funcao fabrica

function CriaAviao(nome, num, dest) {
  function voou() {
    return `${this.nome} voou ao distino de ${this.dest}`;
  }

  return {
    nome,
    num,
    dest,
    voou,
  };
}

const av1 = CriaAviao("LAM", 55, "Maputo");

const av2 = CriaAviao("Q.LA", 685, "Europa");

console.log(av2);

// funcao construtora
function Carros(marca, preco, modelo) {
  this.marca = marca;
  this.preco = preco;
  this.modelo = modelo;
}

Carros.prototype.velocidade = function () {
  return this.marca + " correu a 60km/h";
};

const honda = new Carros("honda", 5_000_000, "2021");

console.log(honda.velocidade())

const mazda = new Carros("mazda", 5_000, "2021");

const ford = new Carros("ford", 2000, "2021");


