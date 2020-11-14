const orderedList = document.querySelector('#lista-tarefas');

function addTaskToList() {
  const addBtn = document.getElementById('criar-tarefa');

  function resetInput() {
    document.querySelector('#texto-tarefa').value = '';
  }

  function addTask() {
    const inputValue = document.querySelector('#texto-tarefa').value;
    const createLi = document.createElement('li');
    createLi.innerHTML = inputValue;
    createLi.className = 'tarefa';
    orderedList.appendChild(createLi);
    resetInput();
  }
  addBtn.addEventListener('click', addTask);
}
addTaskToList();

function selectedTask() {
  orderedList.addEventListener('click', function (event) {
    const selectedListItem = document.querySelector('.selected');
    if (selectedListItem === null) {
      event.target.classList.add('selected');
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      selectedListItem.classList.remove('selected');
      selectedListItem.style.backgroundColor = '';
      event.target.classList.add('selected');
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}
selectedTask();

function completedTask() {
  orderedList.addEventListener('dblclick', function (event) {
    const completedListItem = document.querySelector('.tarefa.selected.completed');
    if (completedListItem === null) {
      event.target.className = 'tarefa selected completed';
    } else {
      event.target.className = 'tarefa selected';
    }
  });
}
completedTask();

function deleteList() {
  const btnDeleteAll = document.querySelector('#apaga-tudo');
  btnDeleteAll.addEventListener('click', function () {
    while (orderedList.firstChild) {
      orderedList.removeChild(orderedList.lastChild);
    }
  });
}
deleteList();

function deleteCompletedTasks() {
  const btnDeleteTasks = document.querySelector('#remover-finalizados');

  btnDeleteTasks.addEventListener('click', function () {
    const completedItemTask = document.getElementsByClassName('completed');
    while (completedItemTask.length > 0) {
      completedItemTask[0].parentNode.removeChild(completedItemTask[0]);
    }
  });
}
deleteCompletedTasks();

function toSaveList() {
  const saveBtn = document.querySelector('#salvar-tarefas');

  saveBtn.addEventListener('click', function () {
    const listItems = document.getElementsByTagName('li');
    const savedList = [];
    for (let i = 0; i < listItems.length; i += 1) {
      const savedListItem = [];
      savedListItem.push(listItems[i].innerHTML, listItems[i].className);
      savedList.push(savedListItem);
    }

    localStorage.setItem('savedList', JSON.stringify(savedList));
  });
}
toSaveList();

function getSavedList() {
  const localSavedList = localStorage.getItem('savedList');

  if (localSavedList != null) {
    const savedListItem = JSON.parse(localSavedList);

    for (let j = 0; j < savedListItem.length; j += 1) {
      const aux = savedListItem[j];
      const createLi = document.createElement('li');
      createLi.innerHTML = aux[0];
      createLi.className = aux[1];
      orderedList.appendChild(createLi);
    }
  }
}
getSavedList();

function verifySelected(nodeArray) {
  let sel = 0;
  for (let index = 0; index < nodeArray.length; index += 1) {
    if (nodeArray[index].classList.contains('selected')) {
      sel = index;
    }
  }
  return sel;
}

function moveUpTarefas() {
  const upBtn = document.querySelector('#mover-cima');

  upBtn.addEventListener('click', function () {
    const olNodeList = document.querySelectorAll('.tarefa');
    let sel = 0;
    if (document.querySelector('.selected') != null) {
      sel = verifySelected(olNodeList);
      if (sel > 0) {
        olNodeList[sel].parentElement.insertBefore(olNodeList[sel], olNodeList[sel - 1]);
      }
    }
  });
}

function moveDownTarefas() {
  const downBtn = document.querySelector('#mover-baixo');

  downBtn.addEventListener('click', function () {
    const olNodeList = document.querySelectorAll('.tarefa');
    let sel = 0;
    if (document.querySelector('.selected') != null) {
      sel = verifySelected(olNodeList);
      olNodeList[sel].parentElement.insertBefore(olNodeList[sel], olNodeList[sel + 2]);
    }
  });
}
moveUpTarefas();
moveDownTarefas();

function deleteItem() {
  const btnDeleteItem = document.querySelector('#remover-selecionado');

  btnDeleteItem.addEventListener('click', function () {
    const selectedItemTask = document.getElementsByClassName('selected');
    selectedItemTask[0].parentNode.removeChild(selectedItemTask[0]);
  });
}
deleteItem();
