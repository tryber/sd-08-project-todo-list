const inputText = document.getElementById('texto-tarefa');
const localeListTasks = document.getElementById('lista-tarefas');

function removeItem(element) {
  const equal = (el) => el === element;
  const position = list.findIndex(equal);
  list.splice(position, 1);
}
function removeSelected(target, classElement) {
  return target.classList.remove(classElement);
}
function removeSelectedAll(classElement) {
  document.querySelectorAll('li').forEach((element) => {
    removeSelected(element, classElement);
  });
}
function addedSelected(target, classElement) {
  target.classList.add(classElement);
}
function selected(target) {
  removeSelectedAll('selected');
  addedSelected(target, 'selected');
  document.querySelectorAll('li').forEach((element, index) => {
    if (element.className.includes('selected')) selectedCurrent = index;
  });
}
function completed(target) {
  return target.className.includes('completed')
    ? removeSelected(target, 'completed')
    : addedSelected(target, 'completed');
}
function createElementHTML(value) {
  for (let index = 0; index < value.length; index += 1) {
    const createdLi = document.createElement('li');
    createdLi.innerText = value[index];
    todoList.appendChild(createdLi);
    if (index === selectedCurrent) createdLi.className = 'selected';
  }
}
function removeElementsAll() {
  const elementTarget = document.querySelectorAll('li');
  elementTarget.forEach((element) => {
    element.remove();
  });
}
function removeItemList(classElement) {
  const elementTarget = document.querySelectorAll('li');
  elementTarget.forEach((element) => {
    const elementEvent = element.innerText;
    if (element.className.includes(classElement)) {
      removeItem(elementEvent);
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
  localStorage.setItem('list', list);
  localStorage.setItem('selected', selectedCurrent);
}
function loadList() {
  const storageLoadLi = localStorage.getItem('list');
  const storageLoadSelected = localStorage.getItem('list');
  if (storageLoadLi) {
    list = storageLoadLi.split(',');
    selectedCurrent = storageLoadSelected;
    return createElementHTML(list);
  }
  return (list = []);
}
function resetElementsHTML() {
  removeElementsAll();
  createElementHTML(list);
}
function push() {
  const item = document.createElement('li');
  item.innerText = inputText.value;
  localeListTasks.appendChild(item);
  inputText.value = null;

  item.addEventListener('dblclick', function () {
    completedItem(item);
  });
  item.addEventListener('click', function () {
    selectedItem(item);
  });
}

loadList();
capturedElementEvents('criar-tarefa', 'click', push);
capturedElementEvents('lista-tarefas', 'click', selected);
capturedElementEvents('lista-tarefas', 'dblclick', completed);
capturedElementEvents('salvar-tarefas', 'click', saverList);
capturedElementEvents('mover-cima', 'click', false);
capturedElementEvents('mover-baixo', 'click', false);
capturedElementEvents('apaga-tudo', 'click', function () {
  list = [];
  inputText.value = '';
  resetElementsHTML();
});
capturedElementEvents('remover-finalizados', 'click', function () {
  removeItemList('completed');
  resetElementsHTML();
});
capturedElementEvents('remover-selecionado', 'click', function () {
  removeItemList('selected');
  resetElementsHTML();
});
