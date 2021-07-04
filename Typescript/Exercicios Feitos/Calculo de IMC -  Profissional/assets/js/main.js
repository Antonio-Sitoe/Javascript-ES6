//devidir o codigo
//uma funcao para cada coisinha
//capturar o evento de submit do formulario;
const form = document.querySelector('#formulario');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Invaliido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Invalida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC e ${imc} (${nivelImc})`

    setResultado(msg, true)
});

function getNivelImc(imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade nivel 1', 'obesidade grau 2', 'obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2);
}


function criaP() {
    const p = document.createElement('p');
    return p
}

function setResultado(msg, isvalid) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const p = criaP();
    if (isvalid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')

    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}