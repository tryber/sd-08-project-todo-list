const inputText = document.getElementById("texto-tarefa");
const createButton = document.getElementById("criar-tarefa");
const eraseAllButton = document.getElementById("apaga-tudo");
const eraseFinishedButton = document.getElementById("remover-finalizados");
const taskList = document.getElementById("lista-tarefas");

createButton.addEventListener("click", function () {
  let createTaskItem = document.createElement("li");
  taskList.appendChild(createTaskItem);
  createTaskItem.innerText = inputText.value;
  inputText.value = null;
});

taskList.addEventListener("click", function (event) {
  let taskItem = document.querySelectorAll("li");
  for (let index = 0; index < taskItem.length; index += 1) {
    taskItem[index].classList.remove("selected");
    taskItem[index].style.backgroundColor = "rgb(256, 256, 256)";
  }
  event.target.className = "selected";
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
});
