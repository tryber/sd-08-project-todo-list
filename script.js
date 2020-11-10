const orderedList = document.querySelector("#lista-tarefas");

function addTaskToList() {
  let addBtn = document.getElementById("criar-tarefa");
  
  function addTask() {
    let inputValue = document.querySelector("#texto-tarefa").value;
    let createLi = document.createElement('li');
    createLi.innerHTML = inputValue;
    createLi.className = 'tarefa';
    orderedList.appendChild(createLi);
    resetInput();
  }
  addBtn.addEventListener('click', addTask);
  
  function resetInput() {
    document.querySelector("#texto-tarefa").value = '';
  }
}
addTaskToList();

function selectedTask() {
  orderedList.addEventListener('click', function (event) {
    const selectedListItem = document.querySelector('.selected');
    if (selectedListItem === null) {
      event.target.classList.add('selected');
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      selectedListItem.classList.remove('selected');
      selectedListItem.style.backgroundColor = '';
      event.target.classList.add('selected');
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
};
selectedTask();

function completedTask() {
  orderedList.addEventListener('dblclick', function (event) {
    const completedListItem = document.querySelector(".tarefa.completed");
    if (completedListItem === null) {
      event.target.className = 'tarefa completed';
    } else {
      event.target.className = 'tarefa';
    }
  });
};
completedTask();
