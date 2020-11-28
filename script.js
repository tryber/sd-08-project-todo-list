function createTask() {
    let taskList = document.getElementById('lista-tarefas');
    let newItem = document.createElement('li');
    let input = document.getElementById('texto-tarefa');
    newItem.innerText = input.value;
    newItem.className = 'task-entry';
    newItem.backgroundColor = 'white';
    events(newItem);
    input.value = '';
    taskList.appendChild(newItem);
}


function events(item) {
    item.onclick = () => {
        Array.from(document.getElementsByClassName('task-entry')).forEach((value) => {
            value.style.backgroundColor = 'white';
        });
        item.style.backgroundColor = 'rgb(128, 128, 128)';
    }
    item.ondblclick = () => {
        if (item.classList.contains('completed')) {
            item.classList.remove('completed');
        } else {
            item.classList.add('completed');
        }
    }
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

function saveTasks() {
    localStorage.clear();
    Array.from(document.getElementsByClassName('task-entry')).forEach((element, index) => {
        localStorage.setItem(index.toString(),
        ((element.classList.contains('completed'))? '£' : '') +
        element.innerText);
    });
}

window.onload = () => {
    for (let index = 0; true; index++) {
        let text = localStorage.getItem(index.toString());
        if (text != null) {
            let newElement = document.createElement('li');
            if (text.startsWith('£')) {
                newElement.className = 'task-entry completed';
                newElement.innerText = text.substr(1);
            } else {
                newElement.className = 'task-entry';
                newElement.innerText = text;
            }
            events(newElement);
            document.getElementById('lista-tarefas').appendChild(newElement);
        } else break;
    }
}

function removeSelected() {
    Array.from(document.getElementsByClassName('task-entry')).forEach((element) => {
        if (element.style.backgroundColor !== 'white') element.remove();
    });
}