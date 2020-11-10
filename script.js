function createToDo() {
  const inputFieldValue = document.getElementById('texto-tarefa').value;

  if (!inputFieldValue) {
    return;
  }

  const listOfTodos = document.getElementById('lista-tarefas');
  const createLi = document.createElement('li');
  createLi.innerText = inputFieldValue;

  createLi.addEventListener('click', (Event) => {
    const liArray = document.getElementsByTagName('li');
    for (let i = 0; i < liArray.length; i += 1) {
      liArray[i].classList.remove('selected');
    }
    Event.target.classList.add('selected');
  });

  createLi.addEventListener('dblclick', (Event) => {
    const isCompleted = Event.target.classList.contains('completed');
    if (isCompleted) {
      Event.target.classList.remove('completed');
    } else {
      Event.target.classList.add('completed');
    }
  });

  listOfTodos.appendChild(createLi);
  document.getElementById('texto-tarefa').value = '';
}

function eraseAllItems() {
  const ol = document.getElementById('lista-tarefas');
  ol.innerHTML = '';
}

function eraseFinishedItems() {
  const finished = document.getElementsByClassName('completed');
  const ol = document.getElementById('lista-tarefas');

  while (finished[0]) {
    if (!finished[0]) {
      return;
    }

    ol.removeChild(finished[0]);
  }
}

function eraseSelectedItem() {
  const selected = document.getElementsByClassName('selected');
  const ol = document.getElementById('lista-tarefas');

  if (!selected[0]) {
    return;
  }

  ol.removeChild(selected[0]);
}

function moveItemUp() {
  const selected = document.querySelector('.selected');
  const ol = document.getElementById('lista-tarefas');
  if (!selected || ol.children[0] === selected) {
    return;
  }

  ol.insertBefore(selected, selected.previousElementSibling);
}

function moveItemDown() {
  const selected = document.querySelector('.selected');
  const ol = document.getElementById('lista-tarefas');
  if (!selected || ol.children[ol.children.length - 1] === selected) {
    return;
  }

  ol.insertBefore(selected.nextElementSibling, selected);
}

function saveTodo() {
  const liArray = document.getElementById('lista-tarefas').children;
  const liObj = {};

  for (let i = 0; i < liArray.length; i += 1) {
    const text = liArray[i].innerText;
    const classes = liArray[i].className;

    liObj[i] = {
      text,
      classes,
    };
  }

  localStorage.setItem('lastState', JSON.stringify(liObj));
}

function handleStorage() {
  const ol = document.getElementById('lista-tarefas');
  const storedItems = JSON.parse(localStorage.getItem('lastState'));

  let key = 0;

  while (storedItems[key]) {
    const li = document.createElement('li');
    li.innerText = storedItems[key].text;
    li.className = storedItems[key].classes;

    ol.appendChild(li);

    key += 1;
  }
}

window.onload = () => {
  if (localStorage.getItem('lastState')) {
    handleStorage();
  }

  const createToDoBtn = document.getElementById('criar-tarefa');
  createToDoBtn.addEventListener('click', createToDo);

  const eraseAllBtn = document.getElementById('apaga-tudo');
  eraseAllBtn.addEventListener('click', eraseAllItems);

  const eraseFinishedBtn = document.getElementById('remover-finalizados');
  eraseFinishedBtn.addEventListener('click', eraseFinishedItems);

  const eraseSelectedBtn = document.getElementById('remover-selecionado');
  eraseSelectedBtn.addEventListener('click', eraseSelectedItem);

  const moveUpBtn = document.getElementById('mover-cima');
  moveUpBtn.addEventListener('click', moveItemUp);

  const moveDownBtn = document.getElementById('mover-baixo');
  moveDownBtn.addEventListener('click', moveItemDown);

  const saveBtn = document.getElementById('salvar-tarefas');
  saveBtn.addEventListener('click', saveTodo);
};
