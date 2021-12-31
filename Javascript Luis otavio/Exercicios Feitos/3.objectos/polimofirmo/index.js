// polimorfismo - e sobrescrever um metodo criado na classse super 


// superClass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log("Saldo insuficienete " + this.saldo);
    return;
  }

  this.saldo -= valor;
  return this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  return this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  return console.log(`AG/C: ${this.agencia}/${this.Conta}
Saldo: ${this.saldo.toFixed()},00 Mts`);
};

const conta1 = new Conta(11, 22, 10);

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.contructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (this.saldo + this.limite < valor) {
    console.log("Saldo insuficienete " + this.saldo);
    return;
  }

  this.saldo -= valor;
  return this.verSaldo();
};

const contaC = new ContaCorrente('20', 22, 5, 100);

contaC.depositar(10);
contaC.sacar(5);
