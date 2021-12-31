 
function ValidaCpf(numero) {
    return Object.create(proto, {
        number: {
            value: numero
        }
    })
}

const limpa = {
    limpaCpf() {  
        return this.number.replace(/\D+/g, '')
    }
}


// pegar os nove digitos do cpf
const teek = {
    teek() {
        return this.limpaCpf().slice(0, -2)
    }
}

// multiplicar por uma sequencia regressiva
// comecando de 10
// pegar o total
const multiplic = {
    total() {
        let i = 10
        const total = Array.from(this.teek()).reduce((ac, item) => {
            ac = ac + (+item * i)
            i--
            return ac;
        }, 0)
        return total
    }
}

const multiplic2 = {
    total2() {
        let i = 11
        const total = Array.from(this.concat()).reduce((ac, item) => {
            ac = ac + (+item * i)
            i--
            return ac;
        }, 0)
        return total
    }
}


// pegar o primeiro digito
// 11 - (total % 11)  se o numero que sair dai for maior que 9 
// considera-se 0

const firstNum = {
    firstNum() {
        const first = 11 - (this.total() % 11)
        return first > 9 ? 0 : first;
    }
}

const SecondNum = {
    SecondNum() {
        const second = 11 - (this.total2() % 11)
        return second > 9 ? 0 : second;
    }
}

const verify = {
    verify(){
        return Number(this.concat2()) === Number(this.limpaCpf());
    }
}

const concat = {
    concat() {
        return this.teek() + this.firstNum();
    }
}

const concat2 = {
    concat2() {
        return this.concat() + this.SecondNum();
    }
}


const proto = {
    ...limpa,
    ...teek,
    ...multiplic,
    ...multiplic2,
    ...firstNum,
    ...SecondNum,
    ...concat,
    ...concat2,
    ...verify
}

const cpf = ValidaCpf('705.484.450-52');
console.log(cpf.verify());







// juntar o primeiro aos 9 num=10

// para pegar o segundo deve multiplicaar
// com numeros regressivo apartir de 11

//pegar o total

// 11 - (total % 11)  se o numero que sair dai for maior que 9 
// considera-se 0

// no final concatenar todos digitos

//comparar se os numeros sao identicos ou nao