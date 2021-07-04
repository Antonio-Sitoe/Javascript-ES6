//a funcao definida com a palavra function tem uma variavel 
//expesial que se chama "arguments" que sustenta todos os argumentos
//da prompria funcao

// quando definimos a funcao com a palavra function seja funcao ou function espression temos uma funcao arguments
// que e um array
// nao funciona em arrow function
// parametros 


// function funcao() {
//     console.log(arguments[10]) //sustenta todos os argumentos
//     let total = 0
//     for (const argumento of arguments) {
//         total += argumento
//     }

//     return total;
// }

// funcao(1, 2, 3, 4, 5, 6, 7);




function funcao() {
    let [...argumentos] = arguments;
    argumentos = argumentos.filter(item => {
        if ((typeof item) === 'number') {
            return item
        }
    })
    const total = argumentos.reduce((ac, item) => {
        return ac + item
    }, 0)

    console.log(total)

}
funcao('valor', 1, 2, 3, 4, 5, 6, 10, 89, 9) //argumentos


//argumentos sao valores que enviamos para os parametros




//maneira mais antigas 
// function funcao(a, b, c)/* paramentos  */ {
//     c = c || 0;
//     console.log(a + b + c)
// }

// funcao(1, 2);//argumentos







// function funcao(a, b = 2, c = 4) /* paramentos  */ {
//     console.log(a + b + c)
// }
// funcao(2, undefined, 20); //argumentos

// // a unica maneira de fazer que o o valor do b tnha o padrao so com o undefined










// atribuicao via desestruturacao com objectos

function funcao({
    nome,
    sobrenome,
    idade
}) /* paramentos  */ {
    console.log(nome, sobrenome, idade)
}
funcao({
    nome: "antonio",
    idade: "20",
    sobrenome: 'sitoe'
}); //argumentos











// essa funcao faz a soma dos argumentos
// o rest operator deve ser o ultimo
// ao inves de utilizar o arguments, agora temos 
//o rest opeator e podemos usar o rest operator inves do argumets
// e o rest funciona em qualquer tipo de funcao;

const conta = (acumulador, ...rest) => {
    rest.map(num => acumulador += num)
    return acumulador;
};

console.log(conta(0, 20, 30, 40, 50))










const conta = function(acumulador, ...rest){
    console.log(arguments)
}
conta(1,2,3,4,5)














//funcoes com arrow functions

// const conta = (...args) => console.log(args);
// conta(1,2,3,4,5)