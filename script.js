const orderedList = document.querySelector("#lista-tarefas");

function addTaskToList() {
  let addBtn = document.getElementById("criar-tarefa");
  
  function addTask() {
    let inputValue = document.querySelector("#texto-tarefa").value;
    let createLi = document.createElement('li');
    createLi.innerHTML = inputValue;
    createLi.className = 'tarefa';
    orderedList.appendChild(createLi);
    resetInput();
  }
  addBtn.addEventListener('click', addTask);
  
  function resetInput() {
    document.querySelector("#texto-tarefa").value = '';
  }
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
};
selectedTask();

function completedTask() {
  orderedList.addEventListener('dblclick', function (event) {
    const completedListItem = document.querySelector(".tarefa.selected.completed");
    if (completedListItem === null) {
      event.target.className = 'tarefa selected completed';
    } else {
      event.target.className = 'tarefa selected';
    }
  });
};
completedTask();

function deleteList() {
  const btnDeleteAll = document.querySelector('#apaga-tudo');
  btnDeleteAll.addEventListener('click', function () {
    while (orderedList.firstChild) {
      orderedList.removeChild(orderedList.lastChild);
    }
  });
};
deleteList();

function deleteCompletedTasks() {
  const btnDeleteTasks = document.querySelector('#remover-finalizados');
 
  btnDeleteTasks.addEventListener('click', function () {
    let completedItemTask = document.getElementsByClassName('completed');
    while(completedItemTask.length > 0) {
      completedItemTask[0].parentNode.removeChild(completedItemTask[0]);
    }
  });
};
deleteCompletedTasks();

function toSaveList() {
  const saveBtn = document.querySelector('#salvar-tarefas');
  
  saveBtn.addEventListener('click', function () {
    let listItems = document.getElementsByTagName('li');
    let savedList = [];
    for (let i = 0; i < listItems.length; i += 1) {
      let savedListItem = [];
      savedListItem.push(listItems[i].innerHTML, listItems[i].className);
      savedList.push(savedListItem);
    }
    
    localStorage.setItem('savedList', JSON.stringify(savedList));
  });
}
toSaveList();

function getSavedList() {
  let localSavedList = localStorage.getItem('savedList');
  if (localSavedList != null) {
    savedListItem = JSON.parse(localSavedList);

    function addSavedList() {
      for (let j = 0; j < savedListItem.length; j += 1) {
        let aux = savedListItem[j];
        let createLi = document.createElement('li');
        createLi.innerHTML = aux[0];
        createLi.className = aux[1];
        orderedList.appendChild(createLi);
      }
    }
    addSavedList();
  }
}
getSavedList();

function moveTarefas() {
  const upBtn = document.querySelector('#mover-cima');
  const downBtn = document.querySelector('#mover-baixo');
  

  upBtn.addEventListener('click', function () {
    let olNodeList = document.querySelectorAll(".tarefa");
    let selectedItemIndex;
    
    for (let k = 0; k < olNodeList.length; k +=1) {
      if (olNodeList[k].classList.contains('selected')) {
        selectedItemIndex = k;
      }
    }

    if (selectedItemIndex > 0) {
      olNodeList[selectedItemIndex].parentElement.insertBefore(olNodeList[selectedItemIndex], olNodeList[selectedItemIndex - 1]);
    } 
  });

  downBtn.addEventListener('click', function() {
    let olNodeList = document.querySelectorAll(".tarefa");
    let selectedItemIndex;

    for (let k = 0; k < olNodeList.length; k +=1) {
      if (olNodeList[k].classList.contains('selected')) {
        selectedItemIndex = k;
      }
    }

    olNodeList[selectedItemIndex].parentElement.insertBefore(olNodeList[selectedItemIndex], olNodeList[selectedItemIndex + 2]);
  });
}
moveTarefas();

function deleteItem() {
  const btnDeleteItem = document.querySelector('#remover-selecionado');

  btnDeleteItem.addEventListener('click', function () {
    let selectedItemTask = document.getElementsByClassName('selected');
    selectedItemTask[0].parentNode.removeChild(selectedItemTask[0]);
  });
}
deleteItem();
