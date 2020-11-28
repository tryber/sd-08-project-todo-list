function createTask() {
    let taskList = document.getElementById('lista-tarefas');
    let newItem = document.createElement('li');
    let input = document.getElementById('texto-tarefa');
    newItem.innerText = input.value;
    newItem.className = 'task-entry';
    newItem.onclick = () => {
        Array.from(document.getElementsByClassName('task-entry')).forEach((value) => {
            value.style.backgroundColor = 'white';
        });
        newItem.style.backgroundColor = 'rgb(128, 128, 128)';
    }
    newItem.ondblclick = () => {
        if (newItem.classList.contains('completed')) {
            newItem.classList.remove('completed');
        } else {
            newItem.classList.add('completed');
        }
    }
    input.value = '';
    taskList.appendChild(newItem);
}

function eraseEverything() {
    Array.from(document.getElementsByClassName('task-entry')).forEach((value) => {
        value.remove();
    });
}

function removeCompleted() {
    Array.from(document.getElementsByClassName('task-entry')).forEach((value) => {
        if (value.classList.contains('completed')) value.remove();
    });
}