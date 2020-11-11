const text = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
let lastSelect = null;

function selectHandler(event) {
  if (lastSelect === null) {
    lastSelect = event.target;
  } else {
    lastSelect.style.backgroundColor = 'white';
    lastSelect = event.target;
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function dblclick(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function createItem(texto) {
  const item = document.createElement('li');
  item.classList.add('list');
  item.innerHTML = texto;
  item.addEventListener('click', selectHandler);
  item.addEventListener('dblclick', dblclick);
  return item;
}

function addItem() {
  const list = document.getElementById('lista-tarefas');
  const item = createItem(text.value);
  list.appendChild(item);
  text.value = '';
}

button.addEventListener('click', addItem);
