//function declaraction => ocorre o hosting  que seria o seguinte o javascript eleva todas as funcoes para o topo do arquivo 
// na hora da execucao
falaOi()

function falaOi() {
    console.log('oie')

}
// as funcoes sao objectos de primeira classe;
// a funcao pode ser tratada como se fosse daddo

//function expressao
const souUmdado = () => {
    console.log('sou um dado')
};

// a variavel passou a ser uma funcao;

function executaFuncao(funcao){
    funcao();
};
executaFuncao(souUmdado)
// arrow function e uma declaracao de funcao bem mais curta 



//dentro de um objecto

const obj = {
    falar(){
        console.log('metodo de objecto')
    }
}

obj.falar()