// subclasses -

const Veiculo = class {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel || "Gasoline";
  }
  acelerar() {
    console.log("acelerou");
  }
};

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete;
  }
  empinar() {
    console.log(`moto empinou cm ${this.rodas} rodas`);
  }

  //pode subscrever o methodt
  acelerar() {
    super.acelerar();
    //super
    console.log(`acelerar rapido`);
  }
}

const honda = new Moto(2, true);
const civic = new Veiculo(4);

console.log(honda);
