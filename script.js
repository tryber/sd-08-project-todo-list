const getText = document.getElementById('texto-tarefa');
const buttonTarefa = document.getElementById('criar-tarefa');
const eraseAll = document.getElementById('apaga-tudo');
const TasksList = document.getElementById('lista-tarefas');
const getTasks = document.getElementById('tasks');
const saveTasks = document.getElementById('salvar-tarefas');




function ListofTasks(event) {

    let paragraph = document.createElement('li');
    paragraph.innerText = getText.value;
    paragraph.className = 'tarefas';
    TasksList.appendChild(paragraph);
    paragraph.addEventListener('click', Selec);
    getText.value = '';
    doubleclick();



}

buttonTarefa.addEventListener('click', ListofTasks);

function Selec(event) {
    let selected = document.getElementsByClassName('selected');
    if (selected.length > 0) {
        selected[0].className = '';
    }
    event.target.className = 'tarefas selected';
}

TasksList.addEventListener('click', Selec);

function erasingTasks() {
    const lista = document.querySelectorAll('.tarefas');
    for (let index = 0; index < lista.length; index += 1) {
        lista[index].remove();
    }
}

eraseAll.addEventListener('click', erasingTasks);

saveTasks.addEventListener('click', savingList);

function savingList() {
    const contentTasks = TasksList.innerHTML;
    localStorage.setItem('conteudoTarefas', contentTasks);
}

savingList();

function doubleclick() {
    const lista = document.querySelectorAll('.tarefas');
    for (let index = 0; index < lista.length; index += 1) {
        lista[index].addEventListener('dblclick', scratchElement)
    }
}


//
function scratchElement(element) {
    if (element.target.classList.contains('completed')) {
        element.target.classList.remove('completed');
    } else element.target.classList.add('completed');
}

scratchElement();