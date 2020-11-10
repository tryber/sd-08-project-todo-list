let texto_tarefa_cxa = document.querySelector('#texto-tarefa');
let criar_tarefa_btn = document.querySelector('#criar-tarefa');
let lista_tarefas_ol = document.querySelector('#lista-tarefas');
let apaga_tudo_btn = document.querySelector('#apaga-tudo');

criar_tarefa_btn.addEventListener('click', criaTarefa);
apaga_tudo_btn.addEventListener('click', apagaLista);

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

    event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function concluiTarefa(event) { // Função que adiciona um risco à tarefa da lista, indicando que ela foi concluída
    if (event.target.className != 'completed') { event.target.className = 'completed'; }
    else { event.target.className = null; }
}

function apagaLista() { // Limpa a lista apagando todas as tarefas
    lista_tarefas_ol.innerHTML = '';
}