const criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', function() {
    const itemTarefa = document.createElement('li');
    const txtTarefa = document.getElementById('texto-tarefa');
    let tarefa = document.getElementById('texto-tarefa').value;
    const lista = document.getElementById('lista-tarefas');
    lista.appendChild(itemTarefa).innerText = tarefa;
    txtTarefa.value = '';
})