//  1.pegar todas as variaveis necessarias
const tarefas = document.querySelector('.tarefas');


const btnCreate = document.querySelector('[data-crir]');

const input = document.querySelector('#input');


//  2. pegar evento de click do botao
btnCreate.addEventListener('click', btncriar)

function btncriar(e) {
    e.preventDefault();
    //  3.  pegar valor que esta contido no input
    const inputValue = input.value;
    let list = inputValue === '' ? alert('Digite alguma coisa') : objectCreate('li', inputValue);

}

// 4. criar uma funcao que cria novos objectos
//4.5 //criar uma funcao que gera uma nova lista
function objectCreate(li, inputValue) {
    const list = document.createElement(li);
    list.classList.add('li')

    list.innerHTML = `${inputValue} <button class="btnCLose">Apagar</button>`;
    tarefas.appendChild(list);
    apagarLi('.btnCLose', list);
}

//criar botao de apagar
// function botaoDelet(botao) {
//     const button = document.createElement(botao);
//     button.classList.add('btnCLose')
//     button.innerText = `Apagar`;
//     console.log(button)

// }

//criar funcionalidade no botao para apagar o item do html da localstrre
function apagarLi(botao, list) {
    const button = document.querySelector(botao);
    button.addEventListener('click', (e) => {



    })

}

window.document.addEventListener('click', (e) => {
const el = e.target;
    if (el.classList.contains('btnCLose')) {
        e.preventDefault();
        el.parentElement.remove()
    }
})



//criar uma funcao que faz objectos aparecerem no html

//criar uma funcionalidade para o item estar gravado na localstore