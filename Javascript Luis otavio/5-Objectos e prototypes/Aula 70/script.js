// para criar objcetos


//objectos literais  - elas comecam  com {}

const pessoa = {
    //aqui e o corpo do objecto
    //chave - nome
    // antonio - valor
    nome: 'Antonio',
    idade: 5,

};
// Acessar atraves da notacao de pontos
// console.log(pessoa.nome)
// console.log(pessoa.idade)

// Acessar atraves da notacao de colchetes

// console.log(pessoa['nome'])
// console.log(pessoa['idade'])

// em alguns casos podemos usar a notacao de colchetes
// as duas coisas sao interessantes, mas depende dos casos,
// a colchete e para quando queremos acesssar de modo dinamico

const chave = 'nome'
// console.log(pessoa[chave])
// console.log(pessoa['idade'])








/**============================================================================= */

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
// em alguns casos vamos querer usar o new object
pessoa1.idade = 30;
delete pessoa1.nome
// console.log(pessoa1)


/**============================================================================= */


// objectos podem conter metodos  - metodos sao funcoes que estao dentro dos objectos e que executa accoes
// e as vantagens sao que podemos ter acesso as coisas do objecto dentro dessa funcao

pessoa1.falarNome = function () {
    console.log(this.nome + ' esta falando seu nome')
}
pessoa1.getYearBorn = function () {
    const year = new Date()

    return year.getFullYear() - this.idade;
}

pessoa1.falarNome()

// console.log(pessoa1.getYearBorn())

/**============================================================================= */

// podemos usar o for 

for (let key in pessoa1) {
    // console.log(key)
}


/**============================================================================= */

// criar moldes para criar objectos

// fatory function
// construtor function
// classes

/**============================================================================= */

// fatory 

function CriaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`

        },

    }
}


const p1 = CriaPessoa('Antonio', 'Sitoe')
console.log(p1.nomeCompleto)

/**============================================================================= */


// function Person(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;

// }
// //devemos escrever sempre a palavra new 

// const p2 = new Person('luiz', 'miranda')
// console.log(p2)

/* 

    oque a palavra new faz ?
    1. cria um objecto vazio {}
    2. levar o this - da funcao para dar a objecto (muda o contexto do this)
    exemplo
    const p2 = {}
    p2.nome = this

    o this muda de acordo com o objecto

    3. retorna um objecto 
*/


// podemos usar o object.freazy para travar e nao alterar
/**============================================================================= */



function Person(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this)
}
//devemos escrever sempre a palavra new 

const p2 = new Person('luiz', 'miranda')
console.log(p2)


/**============================================================================= */
/**============================================================================= */