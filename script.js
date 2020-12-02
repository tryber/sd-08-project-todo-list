const criarTarefa = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

criarTarefa.addEventListener('click', function() {
    const itemTarefa = document.createElement('li');
    const txtTarefa = document.getElementById('texto-tarefa');
    let tarefa = document.getElementById('texto-tarefa').value;
    lista.appendChild(itemTarefa).innerText = tarefa;
    txtTarefa.value = '';
})