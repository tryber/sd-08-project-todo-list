let getText = document.getElementById('texto-tarefa');
let buttonTarefa = document.getElementById('criar-tarefa');
let eraseAll = document.getElementById('apaga-tudo');
let TasksList = document.getElementById('lista-tarefas');
getText.className = 'list-of-tasks';

function ListofTasks(event) {

    let paragraph = document.createElement('li');
    paragraph.innerText = getText.value;
    paragraph.className = 'task';
    TasksList.appendChild(paragraph);
}

buttonTarefa.addEventListener('click', ListofTasks);

function Selec(event) {
    //let tarefas = document.getElementById('task');

    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
}

TasksList.addEventListener('click', Selec);