function listTask() {
  let taskButton = document.getElementById("criar-tarefa");
  taskButton.addEventListener("click", createTask);

  function createTask() {
    let inputText = document.querySelector("#texto-tarefa");
    let olTaks = document.querySelector("#lista-tarefas");
    let liTask = document.createElement("li");
    olTaks.appendChild(liTask);
    liTask.innerText = inputText.value;
    inputText.value = "";
    liTask.addEventListener("click", changeColor);
    liTask.addEventListener("dblclick", completedTask);
  }
}
listTask();

function changeColor(event) {
  let listItem = document.querySelectorAll("li");
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].style.backgroundColor = "";
  }
  event.target.style.backgroundColor = "rgb(128,128,128)";
}

function completedTask(event) {
  let element = event.target;
  if (element.classList.contains("completed")) {
    event.target.classList.remove("completed");
  } else {
    element.classList.add("completed");
  }
}
