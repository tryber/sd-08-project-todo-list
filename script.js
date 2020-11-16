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

function addTaskColor() {
    let taskList = document.querySelector("#lista-tarefas");
    taskList.addEventListener('click', function(event) {
    let selected = document.querySelector('.selected');
    if (selected === null) {
        event.target.classList.add('selected');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    } else {
        selected.classList.remove('selected');
        selected.style.backgroundColor = '';
        event.target.classList.add('selected');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    }
    });
}
addTaskColor();