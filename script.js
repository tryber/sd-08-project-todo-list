const inputText = document.getElementById('texto-tarefa');
const todoList = document.getElementById('lista-tarefas');
let list = [];

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
}
function loadList() {
  const storageLoad = localStorage.getItem('list');
  if (storageLoad) {
    list = storageLoad.split(',');
    return createElementHTML(list);
  }
  return (list = []);
}
function resetElementsHTML() {
  removeElementsAll();
  createElementHTML(list);
}
function push() {
  list.push(inputText.value);
  inputText.value = '';
  resetElementsHTML();
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
