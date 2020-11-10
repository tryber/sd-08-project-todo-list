function createToDo() {
  const inputFieldValue = document.getElementById('texto-tarefa').value;
  const listOfTodos = document.getElementById('lista-tarefas');
  const createLi = document.createElement('li');
  createLi.innerText = inputFieldValue;

  createLi.addEventListener('click', (Event) => {
    const liArray = document.getElementsByTagName('li');
    for (let i = 0; i < liArray.length; i += 1) {
      liArray[i].style.backgroundColor = 'white';
    }
    Event.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
  });

  createLi.addEventListener('dblclick', (Event) => {
    Event.target.className = Event.target.className ? '' : 'completed';
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

window.onload = () => {
  const createToDoBtn = document.getElementById('criar-tarefa');
  createToDoBtn.addEventListener('click', createToDo);

  const eraseAllBtn = document.getElementById('apaga-tudo');
  eraseAllBtn.addEventListener('click', eraseAllItems);

  const eraseFinishedBtn = document.getElementById('remover-finalizados');
  eraseFinishedBtn.addEventListener('click', eraseFinishedItems);
}
