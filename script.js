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

function changeBackGroundColorSelectedItem(event) {
  for (let i = 0; i < listLocal.children.length; i += 1) {
    listLocal.children[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

listLocal.addEventListener('click', changeBackGroundColorSelectedItem);

function scratchCompletedItem(event) {
  if (event.target.className !== 'completed') {
    event.target.className = 'completed';
  }  else {
    event.target.className = '';
  }
}

listLocal.addEventListener('dblclick', scratchCompletedItem);
