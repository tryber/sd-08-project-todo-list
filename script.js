let createList = document.getElementById("lista-tarefas");
//requisitos 5
let createTaskButton = document.getElementById("criar-tarefa");
function taskButton() {
    createTaskButton.addEventListener("click", newEvent);
}
taskButton();
function newEvent() {
    let inputText = document.getElementById("texto-tarefa").value;
    let clearInput = document.getElementById("texto-tarefa");
    let newItens = document.createElement("li");
    newItens.innerHTML = inputText;
    clearInput.value = "";
    // Source: https://www.guj.com.br/t/limpar-um-inputtext/203164/3
    newItens.className = "itens-lista";
    newItens.addEventListener("click", paddingColor);
    newItens.addEventListener("dblclick", lineThrough);
    createList.appendChild(newItens);
}
//requisitos 7 e 8 
function paddingColor(event) {
    let taskList = document.querySelector(".click-class");
        if (taskList !== null) {
        taskList.classList.remove("click-class");
        event.target.classList.add("click-class");
    } else {
        event.target.classList.add("click-class");
    }
}
//requisito 9
function lineThrough(event) {
    if (event.target.classList.contains("completed")) {
        event.target.classList.remove("completed");
    } else {
        event.target.classList.add("completed");
    };
}
//requisito 10
let createRemoveButton = document.getElementById("apaga-tudo");
createRemoveButton.addEventListener("click", newButton);
function newButton() {
  createList.innerHTML = ""; 
}