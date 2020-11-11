function createTask() {
    let input = document.querySelector('#texto-tarefa');
    let button = document.querySelector('#criar-tarefa');
    let list = document.querySelector('#lista-tarefas');
    button.addEventListener('click', function () {
        let newLi = document.createElement('li');
        newLi.innerText = input.value;
        newLi.className = 'task';
        list.appendChild(newLi);
        input.value = '';
    })
}

createTask();

function selecting() {
    let list = document.querySelector('#lista-tarefas');
    list.addEventListener('click', function(event) {
        let selected = document.querySelector('.selected');
        if (selected !== null) {
            selected.className = 'task';
        } if (event.target.className === 'task') {
            event.target.className = 'selected';
        }
    })
}

function completing() {
    let list = document.querySelector('#lista-tarefas');
    list.addEventListener('click', function (event) {
        if (event.target.className === 'selected') {
            event.target.className = 'completed';
        }
    })
}

completing();

function notComplete() {
    let list = document.querySelector('#lista-tarefas');
    list.addEventListener('dblclick', function (event) {
        if (event.target.className === 'completed') {
            event.target.className = 'task';
        }
    })
}

notComplete();
selecting();