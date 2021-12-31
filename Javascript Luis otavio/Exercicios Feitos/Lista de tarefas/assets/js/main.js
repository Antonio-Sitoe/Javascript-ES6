const inputTarefa = document.querySelector('.input-tarefa');
const btnnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaTarefa(textoInput) {
    const li = criaLI();
    li.innerHTML = textoInput;
    limpaInput();
    criaBotaoApagar(li)
    tarefas.appendChild(li);
    salvarTarefas();
}

function criaLI() {
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)

    }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

btnnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)

})

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApgar = document.createElement('button')
    botaoApgar.innerText = `Apagar`;
    botaoApgar.classList.add('apagar');
    li.appendChild(botaoApgar)

}

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas()
    }
})


function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const ListaDtarefas = [];

    for (let tarefa of liTarefas) {
        let tarefatexto = tarefa.innerText;
        tarefatexto = tarefatexto.replace('Apagar', '').trim();
        ListaDtarefas.push(tarefatexto)
    }

    const tarefasJSON = JSON.stringify(ListaDtarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDetarefas = JSON.parse(tarefas);

    for (let tarefa of listaDetarefas) {
        criaTarefa(tarefa)
    }
}
adicionarTarefasSalvas()