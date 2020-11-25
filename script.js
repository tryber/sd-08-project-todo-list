const getText = document.getElementById('texto-tarefa');
const buttonTarefa = document.getElementById('criar-tarefa');
const eraseAll = document.getElementById('apaga-tudo');
const TasksList = document.getElementById('lista-tarefas');
const getTasks = document.getElementById('tasks');
const saveTasks = document.getElementById('salvar-tarefas');
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
const tarefas = document.getElementsByClassName('tarefas');


function ListofTasks() {

    let paragraph = document.createElement('li');
    paragraph.innerText = getText.value;
    paragraph.className = 'tarefas';
    TasksList.appendChild(paragraph);
    paragraph.addEventListener('click', Selec);
    paragraph.addEventListener('dblclick', doubleclick);
    getText.value = '';

}


buttonTarefa.addEventListener('click', ListofTasks);

function Selec() {

    for (let index of tarefas) {


        if (index.classList.contains('selected')) {
            index.classList.remove('selected');
        }
    }
    this.classList.add('selected');
}



function erasingTasks() {
    const lista = document.querySelectorAll('.tarefas');
    for (let index = 0; index < lista.length; index += 1) {
        lista[index].remove();
    }
}

function removingCompleted() {
    const elementTask = document.querySelectorAll('.tarefas')
    for (let index = 0; index < elementTask.length; index += 1) {
        if (elementTask[index].classList.contains('completed')) {
            elementTask[index].remove();
        }
    }
}

buttonRemoveCompleted.addEventListener('click', removingCompleted);

eraseAll.addEventListener('click', erasingTasks);

saveTasks.addEventListener('click', savingList);

function savingList() {
    const contentTasks = TasksList.innerText;
    localStorage.setItem('conteudoTarefas', contentTasks);
}

// savingList();

function loadingLocalStorage() {
    if (localStorage !== null) {
        TasksList.innerHTML = localStorage.getItem('conteudoTarefas');
    }
}

loadingLocalStorage();

function doubleclick(evento) {
    if (evento.target.classList.contains('completed')) {
        evento.target.classList.remove('completed');
    } else evento.target.classList.add('completed');
};



