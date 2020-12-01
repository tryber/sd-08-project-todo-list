//Requisito 5
function createTask () {
    const btn = document.getElementById('criar-tarefa');

    btn.addEventListener('click', function(){
        let listTasks = document.getElementById('lista-tarefas');
        let inputTask = document.getElementById('texto-tarefa');
        let textTasks = document.createElement('li');
        textTasks.className = 'lista-numerada';
        textTasks.addEventListener('click', changeColorTask);
        textTasks.addEventListener('dblclick', completeTask);
        listTasks.appendChild(textTasks);
        textTasks.innerText = inputTask.value;
        inputTask.value = '';
    });
}
createTask();

// Requisito 6, 7 e 8
function changeColorTask (event) {
    let textTasks = document.getElementsByClassName('lista-numerada');
        for (let index = 0; index < textTasks.length; index += 1) {
            if (textTasks[index].classList.contains('selected')) {
            textTasks[index].classList.remove('selected');
            event.target.classList.add('selected');
        } else {
            event.target.classList.add('selected');
        }
    }
}

// Requisito 9
function completeTask (event) {
    if (event.target.classList.contains ('completed')) {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
}

// Requisito 10
function clearTask () {
    let clear = document.getElementById('apaga-tudo');

    clear.addEventListener('click', function() {
        let textTasks = document.getElementsByClassName('lista-numerada');
        let task = document.getElementById('lista-tarefas');
        
        for (let i = textTasks.length - 1; i >= 0; i -= 1) {
            task.removeChild(textTasks[i]);
        }
    });
}
clearTask ();

// Requisito 11
function removeCompleted () {
    let remove = document.getElementById('remover-finalizados');

    remove.addEventListener('click', function (){
        let completed = document.getElementsByClassName('completed');
        for (let i = completed.length - 1; i >= 0; i -= 1){
        completed[i].remove();
        }
    });
}
removeCompleted();

// Requisito 12
function saveTasks () {
    localStorage.getItem
}

// Requisito 13
function moveItems () {
    const moveUp = document.getElementById('mover-cima');
    const moveDown = document.getElementById('mover-baixo');
    const listTasks = document.getElementById('lista-tarefas');
    

    moveUp.addEventListener('click', function(){
        let task = document.querySelector('.selected');
        if (task && listTasks.firstChild !== task) {
            listTasks.insertBefore(task, task.previousElementSibling);
        }
    });
    
    moveDown.addEventListener('click', function(){
        let task = document.querySelector('.selected');
        if (task && listTasks.lastChild !== task) {
            listTasks.insertBefore(task.nextElementSibling, task);
        }
    });
}
moveItems();

// Requisito 14
function removeSelected () {
    let remove = document.getElementById('remover-selecionado');

    remove.addEventListener('click', function(){
        let selected = document.getElementsByClassName('selected');
        selected[0].remove();
    });
}
removeSelected ();