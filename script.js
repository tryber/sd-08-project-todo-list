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
  }
}
listTask();

function changeColor(event) {
  listItem = document.querySelectorAll("li");
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].style.backgroundColor = "";
  }
  event.target.style.backgroundColor = "rgb(128,128,128)";
}
