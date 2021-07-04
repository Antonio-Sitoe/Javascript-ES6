//  1.pegar todas as variaveis necessarias
const tarefas = document.querySelector('.tarefas');

const btnCreate = document.querySelector('[data-crir]');

const input = document.querySelector('#input');


btnCreate.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = input.value;
    if (!inputValue) return '';
    criaTarefa(inputValue)
})

function limpaInput(inputValue) {
    input.value = '';
    input.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.classList.add('btnCLose');
    botaoApagar.innerText = `Apagar`;
    li.appendChild(botaoApagar)

}

function criaTarefa(inputValue) {
    const li = criarLi();
    li.innerHTML = inputValue;
    tarefas.appendChild(li);
    limpaInput(inputValue);
    criaBotaoApagar(li);
    salvarTarefa();
}

function criarLi() {
    const li = document.createElement('li');
    li.classList.add('li');
    return li;
}

//adicionar as funcionalidades as teclas

input.addEventListener('keypress', (e) => {

    let inputValue = input.value;
    if (e.keyCode === 13) {
        e.preventDefault();
        if (!inputValue) return '';
        criaTarefa(inputValue)
    }
})

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('btnCLose')) {
        e.preventDefault();
        el.parentElement.remove();
        salvarTarefa();
    }
})

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');

    const listaDetarefas = [];

    for (let tarefa of liTarefas) {
        let tarefatexto = tarefa.innerText;
        tarefatexto = tarefatexto.replace('Apagar', '').trim();
        listaDetarefas.push(tarefatexto);
    }
    const tarefasJson = JSON.stringify(listaDetarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDetarefas = JSON.parse(tarefas)
    for (let tarefa of listaDetarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()