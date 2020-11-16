const caixaTexto = document.querySelector('#texto-tarefa');
const eventButton = document.querySelector('#criar-tarefa');
const newTaskContainer = document.querySelector('#lista-tarefas');

function paintTask(event) {
    let colorTask = document.querySelectorAll('.lista')
    for (let index = 0; index < colorTask.length; index += 1) {
        if (colorTask[index].getAttribute('style')) {
            colorTask[index].removeAttribute('style');
        }
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)'
}

function taskComplete(event) {
    const elemento = event.target;
    if (elemento.classList.contains('completed')) {
        elemento.classList.remove('completed');
    } else {
        elemento.classList.add('completed');
    }
}

function newTask() {
    const createList = document.createElement('li');
    createList.className = 'lista';
    createList.addEventListener('click', paintTask);
    createList.addEventListener('dblclick', taskComplete);
    createList.innerText = caixaTexto.value;
    newTaskContainer.appendChild(createList);
    document.getElementById('texto-tarefa').value = '';
}

eventButton.addEventListener('click', newTask);


function clearAll() {
    document.getElementById('lista-tarefas').innerHTML = '';
}

const clearList = document.getElementById('apaga-tudo');
clearList.addEventListener('click', clearAll);

function clearCompleted() {
    let liCompleted = document.querySelectorAll('.completed');

    for(let index = 0; index < liCompleted.length; index += 1) {
        let taskCompleted = document.getElementById('lista-tarefas')
        taskCompleted.removeChild(liCompleted[index])
    }
}

const clearTask = document.getElementById('remover-finalizados');
clearTask.addEventListener('click', clearCompleted);