let texto_tarefa_cxa = document.querySelector('#texto-tarefa');
let criar_tarefa_btn = document.querySelector('#criar-tarefa');
let lista_tarefas_ol = document.querySelector('#lista-tarefas');
let apaga_tudo_btn = document.querySelector('#apaga-tudo');
let remover_finalizados_btn = document.querySelector('#remover-finalizados');
let salvar_tarefas_btn = document.querySelector('#salvar-tarefas');
let remover_selecionado_btn = document.querySelector('#remover-selecionado');
let posSelecionado = null;

criar_tarefa_btn.addEventListener('click', criaTarefa);
apaga_tudo_btn.addEventListener('click', apagaLista);
remover_finalizados_btn.addEventListener('click', apagaFinalizados);
remover_selecionado_btn.addEventListener('click', apagaSelecionado);

function criaTarefa() { // Função que adiciona uma nova tarefa na lista
    let tarefa = document.createElement('li');
    tarefa.innerText = texto_tarefa_cxa.value;
    texto_tarefa_cxa.value = '';
    lista_tarefas_ol.appendChild(tarefa);
    tarefa.addEventListener('click', alteraCor);
    tarefa.addEventListener('dblclick', concluiTarefa);
}

function alteraCor(event) { // Funcão que altera a cor da tarefa da lista
    for (tarefa of document.querySelectorAll('li')) { // Remove a seleção dos outros itens da lista
        tarefa.style.backgroundColor = null;
    }

    posSelecionado = event.target;
    event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function concluiTarefa(event) { // Função que adiciona um risco à tarefa da lista, indicando que ela foi concluída
    if (event.target.className != 'completed') { event.target.className = 'completed'; }
    else { event.target.className = null; }
}

function apagaLista() { // Limpa a lista apagando todas as tarefas
    lista_tarefas_ol.innerHTML = '';
}

function apagaFinalizados() { // Apaga da lista os itens já concluidos
    let concluidos = document.querySelectorAll('.completed');
    for (tarefa of concluidos) { lista_tarefas_ol.removeChild(tarefa); }
}

function apagaSelecionado() {
    lista_tarefas_ol.removeChild(posSelecionado);
}