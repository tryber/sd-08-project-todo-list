const butonTarefaLocal = document.querySelector('#criar-tarefa');
const listLocal = document.querySelector('#lista-tarefas');
const inputLocal = document.querySelector('#texto-tarefa');

function insertElement() {
  const newElement = document.createElement('li');
  newElement.innerHTML = inputLocal.value;
  listLocal.appendChild(newElement);
  inputLocal.value = '';
}

butonTarefaLocal.addEventListener('click', insertElement);

function changeBackGroundColorSelectedItem (event) {
  event.target.style.backgroundColor = "rgb(128,128,128)";
}

listLocal.addEventListener('click', changeBackGroundColorSelectedItem);