const inputText = document.getElementById('texto-tarefa');
const localeListTasks = document.getElementById('lista-tarefas');

function selected(elementEvent) {
  if (document.getElementsByClassName('selected')[0] != null) {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
  }
  elementEvent.classList.add('selected');
}
function completed(elementEvent) {
  if (elementEvent.classList.contains('completed')) {
    elementEvent.classList.remove('completed');
  } else {
    elementEvent.classList.add('completed');
  }
}
function createElementHTML() {
  const createdLi = document.createElement('li');
  createdLi.innerText = inputText.value;
  localeListTasks.appendChild(createdLi);
  inputText.value = '';
  createdLi.addEventListener('dblclick', () => {
    completed(createdLi);
  });
  createdLi.addEventListener('click', () => {
    selected(createdLi);
  });
}
function removeElementsAll() {
  const elementTarget = document.querySelectorAll('li');
  elementTarget.forEach((element) => {
    element.remove();
  });
}
function removeItemList(classElement) {
  document.querySelectorAll('li').forEach((element) => {
    if (element.classList.contains(classElement)) {
      element.remove();
    }
  });
}
function capturedElementEvents(target, event, callback) {
  const currentElement = document.getElementById(target);
  currentElement.addEventListener(event, (element) => {
    const elementEvent = element.target;
    callback(elementEvent);
  });
}
function saverList() {
  localStorage.clear();
  localStorage.setItem('tasksList', localeListTasks.innerHTML);
}
function loadList() {
  const storageLoad = localStorage.getItem('tasksList');
  if (storageLoad) {
    localeListTasks.innerHTML = storageLoad;
  }
}
function moveUpper() {
  const itemS = document.querySelector('.selected');
  if (itemS) {
    if (itemS.previousElementSibling) {
      itemS.parentNode.insertBefore(itemS, itemS.previousElementSibling);
    } else {
      alert('Não é possível mover esta tarefa para cima');
    }
  }
}
function moveDown() {
  const itemS = document.querySelector('.selected');
  if (itemS) {
    if (itemS.nextElementSibling) {
      itemS.parentNode.insertBefore(itemS.nextElementSibling, itemS);
    } else {
      alert('Não é possível mover esta tarefa para baixo');
    }
  }
}

loadList();
capturedElementEvents('criar-tarefa', 'click', createElementHTML);
capturedElementEvents('salvar-tarefas', 'click', saverList);
capturedElementEvents('mover-cima', 'click', moveUpper);
capturedElementEvents('mover-baixo', 'click', moveDown);
capturedElementEvents('apaga-tudo', 'click', removeElementsAll);
capturedElementEvents('remover-finalizados', 'click', function () {
  removeItemList('completed');
});
capturedElementEvents('remover-selecionado', 'click', function () {
  removeItemList('selected');
});
