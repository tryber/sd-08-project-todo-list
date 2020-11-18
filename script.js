const butonTarefaLocal = document.querySelector('#criar-tarefa');
const listLocal = document.querySelector('#lista-tarefas');
const inputLocal = document.querySelector('#texto-tarefa');
const butonClear = document.querySelector('#apaga-tudo');
const butonClearScratcheds = document.querySelector('#remover-finalizados');
const butonSave = document.querySelector('#salvar-tarefas');

function insertElement() {
  const newElement = document.createElement('li');
  newElement.innerHTML = inputLocal.value;
  listLocal.appendChild(newElement);
  inputLocal.value = '';
  return newElement;
}

butonTarefaLocal.addEventListener('click', insertElement);

function changeBackGroundColorSelectedItem(event) {
  for (let i = 0; i < listLocal.children.length; i += 1) {
    listLocal.children[i].style.backgroundColor = '';
  }
  if (event.target.id === 'lista-tarefas') {
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

function saveList() {
    localStorage.clear();
  for (let i = 0; i < listLocal.children.length; i += 1) {
    if (listLocal.children[i].className === 'completed') {
      let textItem = [];
      textItem.push(listLocal.children[i].innerText);
      localStorage.setItem(i, textItem);
      let classItem = [];
      let className = i + ' ClassName';
      classItem.push(listLocal.children[i].className);
      localStorage.setItem(className, classItem);
    } else {
      let textItem = listLocal.children[i].innerText;
      localStorage.setItem(i, textItem);
    }
  }
}

butonSave.addEventListener('click', saveList);

function comeListBack() {
  let storageClass = '';
  let aux = localStorage.length;
  let contItens = 0;
  
  for (let index = 0; index < aux; index += 1) {
    storageClass = index + ' ClassName';
    if (localStorage.getItem(storageClass) == 'completed') {
      aux -= 1;
      insertElement();
      let elementLocal = document.getElementsByTagName('li');
      elementLocal[contItens].innerText = localStorage[contItens];
      elementLocal[contItens].className = localStorage[storageClass];
      contItens += 1;
    } else if (localStorage.getItem(index) !== '') {
      insertElement();
      let elementLocal = document.getElementsByTagName('li');
      elementLocal[contItens].innerText = localStorage[contItens];
      contItens += 1;
    }
  }
}
comeListBack();
