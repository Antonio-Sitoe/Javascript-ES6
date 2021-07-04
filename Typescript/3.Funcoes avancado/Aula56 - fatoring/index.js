function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        peso:80,
        fala(assunto) {
        return `${this.peso} falou ${assunto}`
    }
};
}

//o this sempre vai se referir a pessoa que chamou
//o que estiver executado

const p1 = criaPessoa('luiz', 'otavio');

//sempre que eu chamo alguma coisa, por exemplo abaixo, mostra o 
//p1 a chamar o metodo fala() e entao o p1 e o this.
console.log(p1.fala('sobre js'))

//nesse exato caso o p1 e o this

const p2 = criaPessoa('Maria', 'sitoe');

console.log(p2.fala('sobre js'))
// retorna Maria falou de js
// enato o this nesse caso e o p2
// entao para concluir, sempre o this vai ser a pessoa quem o chamou;




/*====================================================================*/


//funcao fatory function ou funcao fabrica
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} falou ${assunto}`
        },
        altura,
        peso,
        Imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    };
}
const p1 = criaPessoa('luiz', 'otavio', 1.80, 80);

console.log(p1.Imc())//o this recebe a funcao imc



/*====================================================================*/

// metodo getter
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} falou ${assunto}`
        },
        altura,
        peso,

        //notacao de atributo getter
        get Imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    };
}
const p1 = criaPessoa('luiz', 'otavio', 1.80, 80);

console.log(p1.nome) // atributo
console.log(p1.sobrenome)//metodo ou atributo
// console.log(p1.Imc())// metodo e funcao nao funciona quando colocamos get
console.log(p1.Imc) //assim funciona



/*====================================================================*/


function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto) {
            return `${this.nome} falou ${assunto}`
        },
        altura,
        peso,

        //notacao de atributo getter
        get Imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    };
}
const p1 = criaPessoa('luiz', 'otavio', 1.80, 80);

p1.nomeCompleto = `Antonio Manuel Sitoe`;

console.log(p1.nomeCompleto)

