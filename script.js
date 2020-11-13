const caixaTexto = document.querySelector('#texto-tarefa');
const eventButton = document.querySelector('#criar-tarefa')
const newTaskContainer = document.querySelector('#lista-tarefas')

function newTask () {
    const createList = document.createElement('li');
    createList.innerText = caixaTexto.value
    newTaskContainer.appendChild(createList)


}

eventButton.addEventListener('click', newTask)