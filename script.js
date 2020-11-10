let texto_tarefa_cxa = document.querySelector('#texto-tarefa');
let criar_tarefa_btn = document.querySelector('#criar-tarefa');
let lista_tarefas_ol = document.querySelector('#lista-tarefas');

criar_tarefa_btn.addEventListener('click', criaTarefa);

function criaTarefa() { // Função que adiciona uma nova tarefa na lista
    let tarefa = document.createElement('li');
    tarefa.innerText = texto_tarefa_cxa.value;
    texto_tarefa_cxa.value = '';
    lista_tarefas_ol.appendChild(tarefa);
    tarefa.addEventListener('click', alteraCor);
}

function alteraCor(event) { // Funcão que altera a cor da tarefa da lista
    event.target.style.backgroundColor = 'rgb(128,128,128)';
}