const txtTask = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');

txtTask.addEventListener('keyup', checkEnterEvent);
btnCreateTask.addEventListener('click', createTask);

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