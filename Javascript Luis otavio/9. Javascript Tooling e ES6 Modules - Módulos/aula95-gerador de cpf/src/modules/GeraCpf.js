import ValidaCpf from "./ValidaCpf.js";

export default class GeraCpf {
  rand(min = 100000000, max = 999999999) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  geraNovaCpf() {
    const cpsSemDigito = this.rand().toString();

    const digito = ValidaCpf.geraDigito(cpsSemDigito);
    const digito2 = ValidaCpf.geraDigito(cpsSemDigito + digito);
    const novoCpf = cpsSemDigito + digito + digito2;
    return this.formatado(novoCpf);
  }

  formatado(cpf) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
      6,
      9
    )}-${cpf.slice(9, 11)}`;
  }
}
