let getText = document.getElementById('texto-tarefa');
let buttonTarefa = document.getElementById('criar-tarefa');
let eraseAll = document.getElementById('apaga-tudo');
let TasksList = document.getElementById('lista-tarefas');
let getTasks = document.getElementById('tasks');



function ListofTasks(event) {

    let paragraph = document.createElement('li');
    paragraph.innerText = getText.value;
    paragraph.className('tarefas')
    TasksList.appendChild(paragraph);
    paragraph.addEventListener('click', Selec);
    getText.value = '';



}

buttonTarefa.addEventListener('click', ListofTasks);

function Selec(event) {
    let selected = document.getElementsByClassName('selected');
    if (selected.length > 0) {
        selected[0].className = '';
    }
    event.target.className = 'selected';
}

TasksList.addEventListener('click', Selec);