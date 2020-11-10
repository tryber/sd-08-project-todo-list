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
    taskItem[index].style.backgroundColor = "rgb(256, 256, 256)";
  }
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
});

taskList.addEventListener("dblclick", function (event) {
    if (event.target.className == "completed"){
        event.target.style.textDecoration = "none";
        event.target.classList.remove("completed")
    } else {
    event.target.style.textDecoration = "line-through";
    event.target.className = "completed";
}
});

eraseAllButton.addEventListener("click", function () {
    let listSize = document.querySelectorAll("li").length;
    for (let index = 0; index < listSize; index += 1) {
    let lastItem = taskList.lastElementChild;
    taskList.removeChild(lastItem);
    }
})

eraseFinishedButton.addEventListener("click", function () {
    let listSize = document.querySelectorAll(".completed").length;
    for (let index = 0; index < listSize; index += 1) {
        let firstItem = document.querySelector('.completed');
        taskList.removeChild(firstItem);
        }
})