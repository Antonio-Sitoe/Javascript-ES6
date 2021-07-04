function Conta(agency, conta, saldo) {
    this.agency = agency;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log('Saldo insfuficiente: ', this.saldo)
        return;
    }
    this.saldo -= valor
    this.Versaldo()
}
Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.Versaldo()
}
Conta.prototype.Versaldo = function (valor) {
    console.log(`Agencia/c : ${this.agency}/${this.conta} | saldo : ${this.saldo.toFixed(2)}`)
}



function ContaCorrente(agency, conta, saldo, limite) {
    Conta.call(this, agency, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.construtor = ContaCorrente;


Conta.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log('Saldo insfuficiente: ', this.saldo)
        return;
    }
    this.saldo -= valor
    this.Versaldo()
}



function ContaPoupanca(agency, conta, saldo) {
    Conta.call(this, agency, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.construtor = ContaPoupanca;


const cc = new ContaCorrente(11, 22, 0, 100);

cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new ContaPoupanca(12, 33, 0);

cp.depositar(10)
cp.sacar(10)
cp.sacar(1)