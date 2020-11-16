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

function taskCompleted() {
    let item = document.querySelector('#lista-tarefas');
    item.addEventListener('dblclick', function(event) {
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        }
    });
}
taskCompleted();

function cleanAll() {
    let btnClean = document.querySelector('#apaga-tudo');
    btnClean.addEventListener('click', function() {
        let list = document.querySelector('#lista-tarefas');
        list.innerHTML = '';
    });
}
cleanAll();

function cleanTaskCompleted() {
    let btnCleanCompleted = document.querySelector('#remover-finalizados');
    btnCleanCompleted.addEventListener('click', function() {
        let list = document.querySelector('#lista-tarefas');
        for (let index = 0; index < list.children.length; index++) {
            if (list.children[index].classList.contains('completed')) {
                list.removeChild(list.children[index]);
                index -= 1;
            }
        }
    });
}
cleanTaskCompleted();