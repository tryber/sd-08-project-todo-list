function addTaskToList() {
  let addBtn = document.getElementById("criar-tarefa");
  let orderedList = document.querySelector("#lista-tarefas")

  function addTask() {
    let inputValue = document.querySelector("#texto-tarefa").value;
    let createLi = document.createElement('li');
    createLi.innerHTML = inputValue;
    orderedList.appendChild(createLi);
    resetInput();
  }
  addBtn.addEventListener('click', addTask);
  
  function resetInput() {
    document.querySelector("#texto-tarefa").value = '';
  }
}
addTaskToList();