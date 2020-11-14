const caixaTexto = document.querySelector('#texto-tarefa');
const eventButton = document.querySelector('#criar-tarefa')
const newTaskContainer = document.querySelector('#lista-tarefas')

function newTask () {
    const createList = document.createElement('li');
    createList.className = 'lista';
    createList.addEventListener('click', paintTask);
    createList.addEventListener('dblclick', taskComplete);
    createList.innerText = caixaTexto.value;
    newTaskContainer.appendChild(createList);
    document.getElementById('texto-tarefa').value = '';
    console.log(createList)
}

eventButton.addEventListener('click', newTask)

const colorItem = document.querySelectorAll('.lista');

function paintTask(event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)'   
}

 function taskComplete(event) {
    const elemento = event.target;
    if (elemento.classList.contains('completed')) {
        elemento.classList.remove('completed')
    } else {
        elemento.classList.add('completed')
    }

}
