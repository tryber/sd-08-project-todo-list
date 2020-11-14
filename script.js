function listTask() {
  const taskButton = document.getElementById('criar-tarefa');
  taskButton.addEventListener('click', createTask);

  function createTask() {
    const inputText = document.querySelector('#texto-tarefa');
    const olTask = document.getElementById('lista-tarefas');
    const liTask = document.createElement('li');
    olTask.appendChild(liTask);
    liTask.innerText = inputText.value;
    inputText.value = '';
    liTask.addEventListener('click', changeColor);
    liTask.addEventListener('dblclick', completedTask);
  }
}
listTask();

function changeColor(event) {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function completedTask(event) {
  const element = event.target;
  if (element.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    element.classList.add('completed');
  }
}

function createAll() {
  const buttonClear = document.getElementById('apaga-tudo');
  const olTask = document.getElementById('lista-tarefas');
  buttonClear.addEventListener('click', () => {
    olTask.innerHTML = '';
  });
}
createAll();

const buttonRemove = document.getElementById('remover-finalizados');
const olTask = document.getElementById('lista-tarefas');
buttonRemove.addEventListener('click', () => {
  const itemList = olTask.querySelectorAll('li');
  for (let index = 0; index < itemList.length; index += 1) {
    if (itemList[index].classList.contains('completed')) {
      olTask.removeChild(itemList[index]);
    }
  }
});
