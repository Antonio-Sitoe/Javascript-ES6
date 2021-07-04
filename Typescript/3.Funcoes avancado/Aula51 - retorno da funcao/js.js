// // retorn retorna um valor e quando termina a funcao

function soma(a, b) {
    return a + b
}


// console.log(soma(1, 6))
// //console.log exibe oque pedimos para exibir

// function soma2(a, b) {
//     console.log(a + b)
// }

// soma2(6, 5)

//temos funcoes que retorna e nao retornam valores
// e no retorno podemos colocar aquilo que nos quisermos


function CriaPessoa(nome, sobrenom) {
    return {
        nome,
        sobrenom
    }
}

const pessoa = CriaPessoa('Luiz', 'sitoe')

const p2 = {
    nome: 'jaoa',
    sobrenome: 'oliveira',
}


console.log(typeof pessoa)
console.log(typeof p2)


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + resto
    }
    return falaResto;
}

const olaMundo = falaFrase('ola')
console.log(olaMundo('Mundo'))



//fazer isso e util



function CriaMultiplicadoe(Multiplicador) {

    // multiplicador esta aqui nesse escopo
    // clouser fechando mesmo depois de ser fechado

    return function multiplicacao(n) {
        return n * Multiplicador
    }

}

const duplica = CriaMultiplicadoe(2);
const triplica = CriaMultiplicadoe(3);
const quadriplica = CriaMultiplicadoe(4);


console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// e importante enetender o clouser poeque podemos retonar qualquer coisa
// podemos retornar um set interal para pousar o parar o set interval
