window.onload = function () {
    dataGet();
}

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

selecting();

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

function deleteList() {
    let list = document.querySelector('#lista-tarefas');
    let button = document.querySelector('#apaga-tudo');
    button.addEventListener('click', function (){
        list.innerHTML = '';
    })
}

deleteList();

function deleteCompletedItens() {
    let list = document.querySelector('#lista-tarefas');
    let button = document.querySelector('#remover-finalizados');
    button.addEventListener('click', function () {
        let completed = document.getElementsByClassName('completed');
        for (let i = completed.length - 1; i >= 0; i -= 1) {
            list.removeChild(completed[i]);
        }
    })
}

deleteCompletedItens();

function dataSave() {
    let list = document.querySelector('#lista-tarefas');
    let button = document.querySelector('#salvar-tarefas');
    button.addEventListener('click', function () {
        localStorage.setItem('list', list.innerHTML);
    })
}

dataSave();

function dataGet() {
    let storage = localStorage.getItem('list');
    let list = document.querySelector('#lista-tarefas');
    if (storage !== null) {
        list.innerHTML = storage;
    }
}