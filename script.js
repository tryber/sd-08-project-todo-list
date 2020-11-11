const text = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const deleteAll = document.querySelector('#apaga-tudo');
const list = document.getElementById('lista-tarefas');
const itens = document.getElementsByTagName('li');
let lastSelect = null;
let cont = 0;

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
  const item = createItem(text.value);
  list.appendChild(item);
  text.value = '';
  if (cont === 0) {
    deleteAll.style.display = 'inline';
    cont = 1;
  }
}

function deleteList() {
  for (let i = itens.length-1; i >= 0; i -= 1) {
    list.removeChild(itens[i]);
    cont = 0;
    deleteAll.style.display = 'none';
  }
}

button.addEventListener('click', addItem);
deleteAll.addEventListener('click', deleteList);
