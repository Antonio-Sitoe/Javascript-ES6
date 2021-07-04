// funcoes imediatas -> IIFE
// expressao de funcao invocadas imediatamente

// nao queremos poluir o escopo global com todas as nossas funcoes

(

    function () {

        const sobrenome = 'antonio'


        const falaOi = () => {
            return nomes() + ' ' + sobrenome
        }

        function nomes() {
            const nome = 'Luiz'
            return nome
        }

        console.log(falaOi())





    }












)();