
/*====================================================================*/




// /*====================================================================*/



// // para filtrar deve criar um novo array para filtrar
// // recebe uma funcao de call back e ela vai iterar sobre cada
// //um dos elementos do array;
// // filter vai sempre retornar um array com a mesma quantidade de elemetos do arrray original ou menos 
// // entao se executamos o filter com uma condicao false vai retornar o proprio array



// function callbackFilter(valor, index, array) {
//     //valor - seria cada um dos elemetos do array
//     // index - a posicao de cada elemento do array
//     // array - valor do array completo


//     if (valor > 10) {
//         return true;
//     } else {
//         return false;
//     }


//     //quando temos uma funcao que retorna true ou false
//     //devemor retornar a condiccao como esta aqui em baixo 
//     //e nunca escrever como esta ai em cima porque retorna true ou false, nao precisa

//     return valor > 10;
// }

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados)



/*====================================================================*/

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter((valor, index, array) => {
//     // console.log(valor, index, array)
//     return valor > 10
// });

// console.log(numerosFiltrados)//[ 50, 80, 11, 15, 22, 27 ]


// //*-==============================================================================








// //retorne uma lista de arrays de numeros maiores que 10;
// const lista = [];
// for (let numero of numeros) {
//     if (numero > 10) {
//         lista.push(numero);
//     }
// }
// console.log(lista)//[ 50, 80, 11, 15, 22, 27 ]

// console.log('============== com forEach =========================')
// /*====================================================================*/
// const lista2 = [];
// numeros.forEach(num => {
//     if (num > 10) {
//         lista2.push(num)
//     }
// })
// console.log(lista2)//[ 50, 80, 11, 15, 22, 27 ]

// console.log('============== com filter ==========================')
// /*====================================================================*/

// const lista3 = numeros.filter(num => num > 10)
// console.log(lista3) //[ 50, 80, 11, 15, 22, 27 ]












/*====================================================================*/
const pessoas = [{
    nome: 'Luiz',
    idade: 62
},
{
    nome: 'Maria',
    idade: 23
},
{
    nome: 'Eduardo',
    idade: 55
},
{
    nome: 'leticia',
    idade: 19
},
{
    nome: 'walace',
    idade: 32
},
{
    nome: 'rosana',
    idade: 47
},
];


/*====================================================================*/
//retorne as pessoas que tem nome com 5 letras ou mais

const pessoasCom5letras = pessoas.filter(pessoa => pessoa.nome.length > 5)

// console.log(pessoasCom5letras)//retorno
// [{
//         nome: 'Eduardo',
//         idade: 55
//     },
//     {
//         nome: 'leticia',
//         idade: 19
//     },
//     {
//         nome: 'walace',
//         idade: 32
//     },
//     {
//         nome: 'rosana',
//         idade: 47
//     }
// ]


//*-==============================================================================




// ///retorne as pessoas com amis de 50 anos 

// const pessoasComIdadeAvancada = pessoas.filter(pessoa => pessoa.idade > 50)

// console.log(pessoasComIdadeAvancada)

// //RETORNA : [ { nome: 'Luiz', idade: 62 }, { nome: 'Eduardo', idade: 55 } ]

//*-==============================================================================


const pessoas = [{nome: 'Luiz',idade: 62},{ nome: 'Maria',idade: 23},
{nome: 'Eduardo',idade: 55},{nome: 'leticia',idade: 19},
{nome: 'walace', idade: 32},{ nome: 'rosana',idade: 47},];


//retoene as pessoas cujo moe termina com a

const terminaComA = pessoas.filter(pessoa => pessoa.nome.slice(-1) === 'a')
// console.log(terminaComA)

[
{ nome: 'Maria', idade: 23 },
{ nome: 'leticia', idade: 19 },
{ nome: 'rosana', idade: 47 }
]
