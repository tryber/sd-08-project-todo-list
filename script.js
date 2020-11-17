function taskCreator() {
  let listTask = document.createElement("li");
  let orderedTask = document.querySelector("#lista-tarefas");
  let task = document.querySelector("#texto-tarefa");

  listTask.innerHTML = task.value;
  orderedTask.appendChild(listTask);
  task.value = "";
}
let addButton = document.getElementById("criar-tarefa");
addButton.addEventListener("click", taskCreator);
