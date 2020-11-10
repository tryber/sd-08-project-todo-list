const list = [];
const inputText = document.getElementById('texto-tarefa');
const todoList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const colorLi = 'rgb(128,128,128)';

function createElementHTML(value) {
  for (let index = 0; index < value.length; index += 1) {
    let createdLi = document.createElement('li');
    createdLi.innerText = value[index];
    todoList.appendChild(createdLi);
  }
}
function backgroundColor(target, color) {
  target.style.backgroundColor = color;
}
function removeElementsAll() {
  const elementTarget = document.querySelectorAll('li');
  elementTarget.forEach((element) => {
    element.remove();
  });
}
function push() {
  removeElementsAll();
  list.push(inputText.value);
  inputText.value = '';
  createElementHTML(list);
}
function capturedElementEvents(target, event, callback) {
  const currentElement = document.getElementById(target);
  currentElement.addEventListener(event, (element) => {
    const elementEvent = element.target;
    callback(elementEvent, colorLi);
  });
}
capturedElementEvents('criar-tarefa', 'click', push);
capturedElementEvents('lista-tarefas', 'click', backgroundColor);
