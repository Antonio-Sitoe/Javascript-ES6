/*Function expression e criada apartir da declaracao de uma variavel
 , na qual assinalamos uma funcao, esta funcao pode ser anonima 
 ou nomeada, a mesma podera ser ativada atraves da variavel assinalada
*/
console.log(soma(4, 2))

const somar = a => a + a;

console.log(somar(2));




// function soma(a, b) {
//     return a + b
// }




// DIFERENCAS
//no momento do hosting 
// quando declaras com function expresions  codigo vem depois
// function declarations sao completamente definidas no momento
// do hosting e ja function expressions aenas serao definidas 
//no omento da execucao. por isso a ordem de declarao de uma FE possioimportancia 




//Geramente o uso entre expression / declaration e uma questao de preferenca. function expression forca a criacao  da mesma antes de sua atividade oque pode contribuir para um codigo mais extruturado.


//E bom comum ver a declaracao da function expresssion 

// s usamos a functio declaration quando precisamos executar a funcao la em cima 



// function dividir(a,b){
//     return a/b
// }


// ANTES DE USAR OS MODULOS 
// isolava se os escopos com 

//IIFE 
// usamos o ()

(()=>{
    const instrumento = 'guitara';

    console.log(instrumento)
})()




// const instrumento = 'violao'

// console.log(instrumento)




const priceNumber = n => +n.replace('R$', '').replace(',',
'.');
// Remova o erro
console.log(priceNumber('R$ 99,99'))

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function(){
    console.log('hello world')
})