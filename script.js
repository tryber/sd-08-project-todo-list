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

  createdLi.addEventListener('dblclick', function () {
    completed(createdLi);
  });
  createdLi.addEventListener('click', function () {
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

loadList();
capturedElementEvents('criar-tarefa', 'click', createElementHTML);
capturedElementEvents('salvar-tarefas', 'click', saverList);
capturedElementEvents('mover-cima', 'click', false);
capturedElementEvents('mover-baixo', 'click', false);
capturedElementEvents('apaga-tudo', 'click', removeElementsAll);
capturedElementEvents('remover-finalizados', 'click', function () {
  removeItemList('completed');
});
capturedElementEvents('remover-selecionado', 'click', function () {
  removeItemList('selected');
});
