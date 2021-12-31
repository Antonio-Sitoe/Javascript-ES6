

class DispositivoElectronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} ligado`);
      return;
    }
    this.ligado = true;
  }
  disligar() {
    if (this.ligado) {
      console.log(`${this.nome} ja deligado`);
      return;
    }
    this.ligado = true;
  }
}
// extends esta a fazer a heranca
// para extender tem que fazer no maximo
// a heranca funciona assim ela vem de cima para baixo
// voce pode herdar dos seus pais, mas os seus pais nao herdam nada de voce
class Smartphones extends DispositivoElectronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.modelo = modelo;
    this.cor = cor;
  }
}

const s1 = new Smartphones("Samsung", "azul", "Galaxy s10");



s1.ligar();
console.log(s1);

class Tablet extends DispositivoElectronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  //podemos sobrecrever metodo ou criar novos metodos
  ligar() {
    console.log("voce alterou o metodo ligar");
  }
}

const tablet = new Tablet("ipad", true);
console.log(tablet.ligar())
