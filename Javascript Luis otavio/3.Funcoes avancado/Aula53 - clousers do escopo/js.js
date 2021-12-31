const retornaFuncao = (nome, sobrenome) => {


    return function () {
        return nome, sobrenome;
    }
}


const funcao = retornaFuncao('luiz','otavio');
const funcao2 = retornaFuncao('joao');
funcao('otavio')
console.dir(funcao)
console.dir(funcao2)
//essa funcao tem acesso 3 escopos
//o escopo dela, da mae dela e do escopo global

// oque e clousure
// E a habilidade da funcao em acessar  seu escopo lexico
// e clousure porque ela fecha o escopo
// el lembra do seu escopo lexico

// o clousure depende de funcao para funcao

// os clouser podem ser as variaveis que nos retornamos nos parametros
// os clouseres so sao clouseres se acessamos as variaveis que nao estao ali no escopo
// isto e quando usamos parametros de fora do escopo ou quando usamos variaveis que foram declaradas fora da funcao


// a habilidade que a funcao tem em acessar o seu escopo lexico;
