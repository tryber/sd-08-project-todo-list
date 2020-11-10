let butonTarefaLocal = document.querySelector('#criar-tarefa');
let listLocal = document.querySelector('#lista-tarefas');
let inputLocal = document.querySelector('#texto-tarefa');

function insertElement (){ 
    let newElement = document.createElement('li');
    newElement.innerHTML = inputLocal.value;
    listLocal.appendChild(newElement);
    inputLocal.value = '';
}

butonTarefaLocal.addEventListener("click", insertElement);
