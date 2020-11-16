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

//As funções de mover para cima e para baixo aprendi nesse site https://www.it-swarm-pt.tech/pt/javascript/mover-um-elemento-um-lugar-para-cima-ou-para-baixo-na-arvore-do-dom-com-javascript/822635469/

function moveUp() {
    let button = document.querySelector('#mover-cima');
    button.addEventListener('click', function () {
        let selected = document.querySelector('.selected');
        if (selected !== null) {
            if (selected.previousElementSibling) {
                selected.parentNode.insertBefore(selected, selected.previousElementSibling);
            }
        }
    })
}

moveUp();

function moveDown() {
    let button = document.querySelector('#mover-baixo');
    button.addEventListener('click', function () {
        let selected = document.querySelector('.selected');
        if (selected !== null) {
            if (selected.nextElementSibling) {
                selected.parentNode.insertBefore(selected.nextElementSibling, selected);
            }
        }
    })
}

moveDown();

function deleteSelected() {
    let list = document.querySelector('#lista-tarefas');
    let button = document.querySelector('#remover-selecionado');
    button.addEventListener('click', function () {
        let selected = document.querySelector('.selected');
        if (selected !== null) {
            list.removeChild(selected);
        }
    })
}

deleteSelected();