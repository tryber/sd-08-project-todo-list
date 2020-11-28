function createTask() {
    let taskList = document.getElementById('lista-tarefas');
    let newItem = document.createElement('li');
    let input = document.getElementById('texto-tarefa');
    newItem.innerText = input.value;
    input.value = '';
    taskList.appendChild(newItem);
}