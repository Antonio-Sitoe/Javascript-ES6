//  Ccom reduce podemos fazer a funcao de cada uma delas 
//  reduce e para reduzir o array
//  funcao mais utilizada para reduzir o array em um numero;
// o reduce pode nos ajudar a fazer map, filter
//uSAMOS O REDUCE PARA reduzir um array em um unico numero

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];

// const total = numeros.reduce((acum, valorActual, indice, array) => {

//     return acum += valorActual;
// }, 0);//pode dar um valor inicial ;

// console.log(total)







/*======================================================*/








//retorne um arrray com os numeros pares - podemos fazer com (filter)

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];

// const total = numeros.reduce((acum, valorActual) => {
//     if (valorActual % 2 === 0) {
//         acum.push(valorActual)
//     }
//     return acum += valorActual;
// }, []);





/*=========================================*/

//retorne um array com o dobro dos valores
//reduce e mais utilizado para remover
// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];

// const total = numeros.reduce((acum, valorActual) => {
//     if (valorActual % 2 === 0) {
//         acum.push(valorActual * 2)
//     }
//     return acum += valorActual;
// }, []);


/*=======================================================================*/
// /necessario colocar o 0 no reduce


// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];

// const total = numeros.reduce((acum, valorActual) => {
//     if (valorActual % 2 === 0) {
//         acum += valorActual
//     }
//     return acum;
// }, 0);





//retorne a pessoa mais velha
const pessoas = [{
        nome: 'Luiz',
        idade: 78
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
        idade: 10
    },{
        nome: 'rosana',
        idade: 64,
    },
    {
        nome: 'walace',
        idade: 80
    },
    
];


const pessoas = [{nome: 'Luiz',idade: 62},{ nome: 'Maria',idade: 23},
{nome: 'Eduardo',idade: 55},{nome: 'leticia',idade: 19},
{nome: 'walace', idade: 32},{ nome: 'rosana',idade: 47},];

const pessoaMaisVelha = pessoas.reduce(function (acum, pessoa) {
    if (acum.idade > pessoa.idade) return acum;

    return pessoa;
})

console.log(pessoaMaisVelha)