class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }

  acelerar() {
    console.log('acelerou');
    return ' ';
  }
}

class Moto extends Veiculo {
  constructor(capacete, rodas) {
    super(rodas);
    this.capacete = capacete;
  }
  acelerar() {
    console.log('acelerou rappido');
    return this;
  }
  empinar() {
    console.log('empinou ', this.rodas);
  }
}

const bmw = new Moto(2, true);
console.log(bmw.acelerar());
