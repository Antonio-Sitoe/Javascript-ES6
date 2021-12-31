function Criapessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        idade: 15,
        fala(sobre) {
            return `${this.nome} esta falando ${this.sobre}e a sua ${this.idade} `;
            //quando nao temos um valor como parametro colocamos o this
        },
        peso,
        altura,

        /* getter so quermos obter o valor */
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        },
        /*quando colocamoas o get o metodo finge ser uma propriedade*/

        get nomeCompleto() {
            return this.nome + ' ' + this.sobrenome;
        },

        /*/*/
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    }
}


const p1 = Criapessoa('Luiz', 'Otavio', 1.80, 80);
const p2 = Criapessoa('Maria', 'Matina', 1.6, 42);

//assim estamos a atribuir um nome
p1.nomeCompleto = 'Maria Duarte Maluleque'
console.log(p1.nomeCompleto)

// qual e a vantagem de usar a fatory ou a funcao construtora














// neste caso o p1 e o this agora
// console.log(p1.fala('sobre js'))
// console.log(p1.imc)
//agora o this e o p2
// console.log(p2.fala('sobre js'))



// o this sempre se refere a pessoa que chamou o metodo
// sempre que chamamos alguma coisa, quem chamou essa e o this
// depende de como voce tras a funcao
// sempre que usamos objecto. algum metodo o this e quem chamou;

// objectos podem ser enormes