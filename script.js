function createTask() {
    let input = document.querySelector('#texto-tarefa');
    let button = document.querySelector('#criar-tarefa');
    let list = document.querySelector('#lista-tarefas');
    button.addEventListener('click', function () {
        let newLi = document.createElement('li');
        newLi.innerText = input.value;
        list.appendChild(newLi);
        input.value = '';
    })
}

createTask();