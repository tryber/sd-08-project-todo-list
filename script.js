function novaTarefa() {
    let tarefa = document.querySelector('#texto-tarefa');
    let botaoAdicionar = document.querySelector('#criar-tarefa');
    let listaTarefa = document.querySelector('#lista-tarefas')

    botaoAdicionar.addEventListener('click', function () {
        if (tarefa.value.length > 0) {
            let item = document.createElement('li');
            item.innerText = tarefa.value;
            listaTarefa.appendChild(item);
            tarefa.value = '';
        } else {
            alert('Não esqueça de digitar o nome da tarefa!')
        }
    })
}
novaTarefa();