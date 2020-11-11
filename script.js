function createTask() {
    let input = document.querySelector('#texto-tarefa');
    let button = document.querySelector('#criar-tarefa');
    let list = document.querySelector('#lista-tarefas');
    button.addEventListener('click', function () {
        let newLi = document.createElement('li');
        newLi.innerText = input.value;
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
            selected.classList.remove('selected');
        }
        event.target.classList.add('selected');
    })
}

function completing() {
    let list = document.querySelector('#lista-tarefas');
    list.addEventListener('dblclick', function (event) {
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
        event.target.classList.add('completed');
        }
    })
}

completing();
selecting();