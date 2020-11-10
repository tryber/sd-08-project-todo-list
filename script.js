const butonTarefaLocal = document.querySelector('#criar-tarefa');
const listLocal = document.querySelector('#lista-tarefas');
const inputLocal = document.querySelector('#texto-tarefa');
const butonClear = document.querySelector('#apaga-tudo');
const butonClearScratcheds = document.querySelector('#remover-finalizados');

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
  if (event.target.id === 'lista-tarefas'){
    event.target.style.backgroundColor = '';
  } else {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }
}

listLocal.addEventListener('mouseover', changeBackGroundColorSelectedItem);

function scratchCompletedItem(event) {
  if (event.target.className === '') {
    event.target.className = 'completed';
  } else {
    event.target.className = '';
  }
}

listLocal.addEventListener('dblclick', scratchCompletedItem);

function clearList() {
  while (listLocal.firstChild) {
    listLocal.removeChild(listLocal.firstChild);
  }
}

butonClear.addEventListener('click', clearList);

function clearScratcheds() {
  for (let i = 0; i < listLocal.children.length; i += 1) {
    if (listLocal.children[i].className === 'completed') {
      listLocal.removeChild(listLocal.children[i]);
      i -= 1;
    }
  }
}

butonClearScratcheds.addEventListener('click', clearScratcheds);
