document.addEventListener('click', function (event) {
    if (event.target.classList.contains('criar-tarefa')) {
        const list = document.getElementById('lista-tarefas');
        let taskText = document.getElementById('texto-tarefa');
        let createList = document.createElement('li');
        createList.className = 'task';
        createList.innerHTML = taskText.value;
        list.appendChild(createList);
        taskText.value = '';
    } else if (event.target.classList.contains('task')) {
        let removeSelect = document.getElementsByClassName('selected');
        for (let i = 0; i < removeSelect.length; i += 1) {
            removeSelect[i].classList.remove('selected');
        }
        event.target.classList.add('selected');
    } else if (event.target.id === 'apaga-tudo') {
        document.getElementById('lista-tarefas').innerHTML = '';
    }
}, false);

document.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    };
}, false);

// document.addEventListener('dblclick', function (event) {
    
// }, false);