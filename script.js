window.onload = function () {
  for (let index = 0; index < localStorage.length; index += 1) {
    let createTaskItem = document.createElement("li");
    taskList.appendChild(createTaskItem);
    createTaskItem.innerText = localStorage.getItem(index);
  }
};

const inputText = document.getElementById("texto-tarefa");
const createButton = document.getElementById("criar-tarefa");
const moveUpButton = document.getElementById("mover-cima");
const moveDownButton = document.getElementById("mover-baixo");
const eraseSelectedButton = document.getElementById("remover-selecionado");
const eraseAllButton = document.getElementById("apaga-tudo");
const eraseCompletedButton = document.getElementById("remover-finalizados");
const saveButton = document.getElementById("salvar-tarefas");
const taskList = document.getElementById("lista-tarefas");

createButton.addEventListener("click", function () {
  if (inputText.value.length != 0) {
    let createTaskItem = document.createElement("li");
    taskList.appendChild(createTaskItem);
    createTaskItem.innerText = inputText.value;
    inputText.value = null;
  }
});

moveUpButton.addEventListener("click", function () {
  let taskItem = document.querySelectorAll("li");
  for (let index = 0; index < taskItem.length; index += 1) {
    if (taskItem[index].style.backgroundColor == "rgb(128, 128, 128)") {
      if (index > 0) {
        let switchPosition = taskItem[index].innerText;
        taskItem[index].style.backgroundColor = 'rgb(256, 256, 256)';
        taskItem[index].innerText = taskItem[index-1].innerText;
        taskItem[index-1].style.backgroundColor = 'rgb(128, 128, 128)';
        taskItem[index-1].innerText = switchPosition;
      }
    }
  }
});

moveDownButton.addEventListener("click", function () {
  let taskItem = document.querySelectorAll("li");
  for (let index = taskItem.length-1; index >-1; index -= 1) {
    if (taskItem[index].style.backgroundColor == "rgb(128, 128, 128)") {
      if (index < taskItem.length-1) {
        let switchPosition = taskItem[index].innerText;
        taskItem[index].style.backgroundColor = 'rgb(256, 256, 256)';
        taskItem[index].innerText = taskItem[index+1].innerText;
        taskItem[index+1].style.backgroundColor = 'rgb(128, 128, 128)';
        taskItem[index+1].innerText = switchPosition;
      }
    }
  }
});

taskList.addEventListener("click", function (event) {
  let taskItem = document.querySelectorAll("li");
  for (let index = 0; index < taskItem.length; index += 1) {
    taskItem[index].style.backgroundColor = "rgb(256, 256, 256)";
  }
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
});

eraseSelectedButton.addEventListener("click", function () {
  let taskItem = document.querySelectorAll("li");
  for (let index = 0; index < taskItem.length; index += 1) {
    if (taskItem[index].style.backgroundColor == "rgb(128, 128, 128)") {
      taskList.removeChild(taskItem[index]);
    }
  }
});

taskList.addEventListener("dblclick", function (event) {
  if (event.target.className == "completed") {
    event.target.style.textDecoration = "none";
    event.target.classList.remove("completed");
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
});

eraseCompletedButton.addEventListener("click", function () {
  let listSize = document.querySelectorAll(".completed").length;
  for (let index = 0; index < listSize; index += 1) {
    let firstItem = document.querySelector(".completed");
    taskList.removeChild(firstItem);
  }
});

saveButton.addEventListener("click", function () {
  localStorage.clear();
  let taskItem = document.querySelectorAll("li");
  for (let index = 0; index < taskItem.length; index += 1) {
    localStorage.setItem(localStorage.length, taskItem[index].innerText);
  }
});
