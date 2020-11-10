// Lista de objetos
const txtTask = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const btnClearListTasks = document.getElementById('apaga-tudo');
const btnRemoveTaskCompleted = document.getElementById('remover-finalizados');
const olListTasks = document.getElementById('lista-tarefas');

// Lista de eventos de objetos
txtTask.addEventListener('keyup', checkEnterEvent);
btnCreateTask.addEventListener('click', createTask);
btnClearListTasks.addEventListener('click', clearListTasks);
btnRemoveTaskCompleted.addEventListener('click', removeTaskCompleted);
olListTasks.addEventListener('click', setBackGroundColor);
olListTasks.addEventListener('dblclick', setTaskCompleted);

// Funções dos eventos dos objetos
function setBackGroundColor(event) {    
    if (document.querySelector('.selected') !== null){
        document.querySelector('.selected').style.backgroundColor = '';
        document.querySelector('.selected').classList.remove('selected');
    }
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';       
}

function setTaskCompleted(event) {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else {
    event.target.classList.add('completed');
    }      
}

function removeTaskCompleted() {
    for (let index = 0; index < olListTasks.childElementCount; index += 1) {
      const task = olListTasks.children[index];
      if (task.classList.contains('completed')) {
        olListTasks.removeChild(task);
        index -= 1;
      }
    }
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
        
        liTask.className = "task";
        liTask.innerHTML = txtTask.value;
        listTasks.appendChild(liTask);

        txtTask.value = '';
    }
}

function clearListTasks() {    
    let listTasks = document.getElementById('lista-tarefas');
    listTasks.innerHTML = '';
}