function createTask() {
    let input = document.querySelector('#texto-tarefa');
    let button = document.querySelector('#criar-tarefa');
    let list = document.querySelector('#lista-tarefas');
    button.addEventListener('click', function () {
        let newLi = document.createElement('li');
        newLi.innerText = input.value;
        newLi.classList = 'task'
        list.appendChild(newLi);
        selecting(newLi);
        input.value = '';
    })
}

createTask();

function selecting(element) {
    element.addEventListener('click', function(event) {
            let selected = document.querySelector('.selected');
            if (selected !== null) {
                selected.className = 'task';
            }
            event.target.className = 'task selected';
    })   
}