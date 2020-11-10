// Lista de objetos
const txtTask = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const olListTasks = document.getElementById('lista-tarefas');

// Lista de eventos de objetos
txtTask.addEventListener('keyup', checkEnterEvent);
btnCreateTask.addEventListener('click', createTask);
olListTasks.addEventListener('click', setBackGroundColor);

// Funções dos eventos dos objetos
function setBackGroundColor(event) {    
    if (document.querySelector('.task-selected') !== null){
        document.querySelector('.task-selected').removeAttribute("style");
        document.querySelector('.task-selected').removeAttribute('class');
    }
    event.target.className = "task-selected";
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';       
}

function checkEnterEvent(event) {
    if (event.type === 'keyup')
    {
        if (event.keyCode === 13) {
            event.preventDefault();
            btnCreateTask.click();
        }
    }
}

function createTask() {
    if (txtTask.value == '') {
        alert('Digite uma tarefa');
    }
    else {
        let listTasks = document.querySelector('.task-list');
        let liTask = document.createElement('li');
        
        liTask.innerHTML = txtTask.value;
        listTasks.appendChild(liTask);

        txtTask.value = '';
    }
}