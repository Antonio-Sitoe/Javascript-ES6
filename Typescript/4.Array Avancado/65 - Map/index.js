// map retorna uma array nova
//map altera para criar um novo array

//A diferenca de filter e map eque na funcao filter retorna verdadeiro 
//quando queremos adicionar um valor no novo array;
//filter nao altera, so filtra 
// mas map queremos retornar um valor alterado,   
//map vai sempre ter o mesmo tamanho do array original


const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];

//map
const numeroDobro = numeros.map((valor, indice) => valor * indice)

//console
console.log(numeroDobro)
// [0, 50, 160, 3, 8, 15, 24, 35, 48, 63, 80, 99, 132, 195, 308, 405]


/*====================================================================*/


//par cada elemento:

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




//*-============= retorne uma string com o nome da pessoa ===========================*/

const strings = pessoas.map(pessoa => pessoa.nome)

console.log(strings)
//[ 'Luiz', 'Maria', 'Eduardo', 'leticia', 'walace', 'rosana' ]





//*-============= remova apenas a chave nome do objecto ===========================*/

// const removerNome = pessoas.map(pessoa => {
//     delete pessoa.nome;
//     return pessoa;
// });

// OU 

const removerNome = pessoas.map(pessoa => ({
    idade: pessoa.idade
}));

console.log(removerNome)


//*-========================================*/




// adiciona uma chave id em cada objecto 


const add = pessoas.map((pessoa, indice) => {
     pessoa.id = indice + 1;
     return pessoa
})

console.log(add)

// [
//     { nome: 'Luiz', idade: 62, id: 0 },
//     { nome: 'Maria', idade: 23, id: 1 },
//     { nome: 'Eduardo', idade: 55, id: 2 },
//     { nome: 'leticia', idade: 19, id: 3 },
//     { nome: 'walace', idade: 32, id: 4 },
//     { nome: 'rosana', idade: 47, id: 5 }
//   ]











/*========================================*/
//Quando usamos map estamos a trabalhar com objectos que trabalhamos por referencia
//quando adicionamos coisas, estamos a mencher no objecto original, desse modo
// quando adicionamos o id estamos a alterar o array original pessoas, para 
//previnir isso podemos fazer o seguinte;

const add = pessoas.map((pessoa, indice) => {
    const newObject = {
        ...pessoa
    };
    newObject.id = indice;
    return newObject
})

console.log(add)
console.log(pessoas)

//quando trabalhamos com objectos e  arrays que sao trabalhados por referencia,
// ele altera o valor do primeiro objecto ou array, por isso devemos ter muito cuidado\