//ESCOPO LEXICO DO JAVASCRIPT


// a funcao conhece aonde foi declarada a funcao 
// tudo que esta declarado dentro dela e os visinhos dela
// tem acesso ao objecto global;


const nome = 'luiz';

const falaNome = () => {

    console.log(nome)
}

const usaFalanome = () => {
    const nome = 'otavio';
    falaNome()
    //neste momento a funcao continua lembrar onde a variavel foi declarada
    // quando executada ela lembra onde foi declarada
}
usaFalanome()