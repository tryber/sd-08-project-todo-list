const caixaTexto = document.querySelector('#texto-tarefa');
const eventButton = document.querySelector('#criar-tarefa')
const newTaskContainer = document.querySelector('#lista-tarefas')

function newTask () {
    const createList = document.createElement('li');
    createList.className = 'lista';
    createList.addEventListener('click', paintTask);
    createList.addEventListener('dblclick', taskComplete)
    createList.innerText = caixaTexto.value;
    newTaskContainer.appendChild(createList);
}

eventButton.addEventListener('click', newTask)

const colorItem = document.querySelectorAll('.lista');
// colorItem.addEventListener('click', paintTask);

function paintTask(event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)'
    
}

function taskComplete(event) {
    let alemento = event.target

}
