// let num1 = 10;
// let num2 = 2.5;

// console.log(num2.toString() + num1);//retorna concatenacao
// console.log(typeof num1);

// console.log(num1.toString(2))//retonrna representacao binaria

// console.log(num1.toFixed(5))

// console.log(Number.isInteger(num1)); //retorna bolean se for inteiro


// let tempo = num1 * '5';
// console.log(Number.isNaN(tempo)); // retorna true ou false;



//IEEE 754 2008;

let numero = 0.7;
let numero2 = 0.1;

numero += numero2;//0.8
numero += numero2;//0.9
numero += numero2;//1.0



console.log(Number(numero.toFixed(2)));
//resolucao do problema de imprecisao do problema IEEE 754 2008


console.log(Number.isInteger(numero));