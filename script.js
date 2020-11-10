function createToDo() {
  let inputFieldValue = document.getElementById('texto-tarefa').value;
  let listOfTodos = document.getElementById('lista-tarefas');
  let createLi = document.createElement('li');
  createLi.innerText = inputFieldValue;

  createLi.addEventListener('click', (Event) => {
    let liArray = document.getElementsByTagName('li');
    for (let i = 0; i < liArray.length; i += 1) {
      liArray[i].style.color = 'black';
    }
    Event.target.style.color = 'rgb(128 , 128 , 128)';
  });

  createLi.addEventListener('dblclick', (Event) => {
    Event.target.className = Event.target.className ? '' : 'completed';
  });

  listOfTodos.appendChild(createLi);
  inputFieldValue = '';
}

function eraseAllItems() {
  let ol = document.getElementById('lista-tarefas');
  ol.innerHTML = '';
}

function eraseFinishedItems() {
  let finished = document.getElementsByClassName('completed');
  let ol = document.getElementById('lista-tarefas');

  if (!finished) {
    return;
  }
  
  for (let i = 0; i < finished.length; i += 1) {
    ol.removeChild(finished[i])
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