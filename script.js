function addTask() {
    let inputText = document.querySelector("#texto-tarefa");
    let taskList = document.querySelector("#lista-tarefas");
    let createTask = document.querySelector("#criar-tarefa");

    createTask.addEventListener('click', function() {
    let li = document.createElement('li');
    li.innerHTML = inputText.value;
    taskList.appendChild(li);
    taskList.next;
    inputText.value = '';
    });
}
addTask();