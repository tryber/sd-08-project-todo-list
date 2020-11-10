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
    event.target.className = 'selected';
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
};
selectedTask();