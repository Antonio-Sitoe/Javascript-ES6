function ValidaCpf(number) {
    this.cpf = number;
}
ValidaCpf.prototype.getFirstNrs = function () {
    const verificar = 11 - (this.totalFirst() % 11);
    return verificar < 0 || verificar > 9 ? 0 : verificar;
}
ValidaCpf.prototype.getSecondsNrs = function () {
    const verificar = 11 - (this.totalSeconds() % 11);
    return verificar < 0 || verificar > 9 ? 0 : verificar;
}
ValidaCpf.prototype.CleanCpf = function () {
    const cleanCpf = this.cpf.replace(/\D+/g, '');
    return cleanCpf
}
ValidaCpf.prototype.reClean = function () {
    const clean = Array.from(this.concat2());
    clean.splice(3, 0, '.')
    clean.splice(7, 0, '.')
    clean.splice(11, 0, '-')
    return clean.join('');
}
ValidaCpf.prototype.teek9 = function () {
    return this.CleanCpf().slice(0, -2)
}
ValidaCpf.prototype.totalFirst = function () {
    const listNumbers = Array.from(this.teek9());
    let i = 11;
    const total = listNumbers.reduce((ac, item, index, array) => {
        ac += (--i) * Number(item)
        return ac
    }, 0)
    return total
}
ValidaCpf.prototype.concat = function () {
    return this.teek9() + this.getFirstNrs()
}
ValidaCpf.prototype.concat2 = function () {
    return this.concat() + this.getSecondsNrs()
}
ValidaCpf.prototype.totalSeconds = function () {
    const list = Array.from(this.concat());
    let i = 11
    const total = list.reduce((ac, item, index) => {
        ac += Number(item) * i--;
        return ac
    }, 0)
    return total;
}
ValidaCpf.prototype.verificar = function () {
    return this.cpf === this.reClean();
}
const cpf = new ValidaCpf("070.987.720-03");
console.log(cpf.verificar())