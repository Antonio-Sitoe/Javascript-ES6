class ValidaCpf {
  constructor(cpf) {
    this.cpf = cpf;
  }
  valida() {
    if (!this.cleanCpf()) return;
    return this.cleanCpf() === this.concatSecond();
  }
  cleanCpf() {
    if (typeof this.cpf !== "string") return false;
    return this.cpf.replace(/\D+/g, "");
  }
  pegarNoveNumeros() {
    if (this.cleanCpf().length !== 11) return false;
    return this.cleanCpf().slice(0, -2);
  }

  totalFirst() {
    let i = 10;
    const total = Array.from(this.pegarNoveNumeros()).reduce((ac, it) => {
      {
        ac = ac + Number(it * i);
        i--;
        return ac;
      }
    }, 0);
    return total;
  }
  totalSecond() {
    let i = 11;
    const total = Array.from(this.concatFirst()).reduce((ac, it) => {
      {
        ac = ac + Number(it * i);
        i--;
        return ac;
      }
    }, 0);
    return total;
  }
  firstNum() {
    const first = 11 - (this.totalFirst() % 11);
    return first > 9 ? 0 : first;
  }
  SecondNum() {
    const second = 11 - (this.totalSecond() % 11);
    return second > 9 ? 0 : second;
  }
  concatFirst() {
    return this.pegarNoveNumeros().concat(this.firstNum());
  }
  concatSecond() {
    return this.concatFirst().concat(this.SecondNum());
  }
}
const cpf = new ValidaCpf("070.987.720-03");
console.log(cpf.valida());
