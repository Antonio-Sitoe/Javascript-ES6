// Escopo 
// Toda a funcao quando e criada ela tem acesso 
//ao escopo dela e ao escopo do pai, o mesmo acontence para funcoes dentro de funcoes

//clouseres 



// debugger;
let item1 = 1;
console.log(item1)
console.log('==========funcao 1===========')

function funcao1() {
    let item2 = 2;

    console.log(item1)
    console.log(item2)
    console.log('==========funcao 2===========')

    function funcao2() {
        let item3 = 3;
        console.log(item1)
        console.log(item2)
        console.log(item3)
    };
    funcao2()
}

funcao1()
// a funcao2 possui 4 escopos.
//o primeiro escopo e local, com aacesso ao item3. 
// o segundo escopo ao tem 2, esse escopo e chamado de cloujure (funcao1) que e o escopo da funcao dentro de uma funcao
// o terceiro escopo e o script com acesso ao item1 
// o quarto escopo e o window
// e como se a funcao2 esteja a caregar uma pasta com as variaveis da funcao1


function contagem(){
    let total = 0;
    return function incrimento(){
        total++
        console.log(total)
    }
}

// funcao dentro de funcao se nao forem iniciada so podemos :
const incrimento = contagem()
incrimento()
// todas as funcoes internas da fatory function possuem uma 
//clouseres da mae, as mesmas contem uma referencia
// as variaveis que foram declaradas dentro do escopo da funcao;
// a unica forma dessas funcoes terem acesso a essas variaveis e porque existe clouser


