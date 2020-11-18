let createList = document.getElementById("lista-tarefas");
//requisitos 5 e 6
let createTaskButton = document.getElementById("criar-tarefa");
function taskButton() {
    createTaskButton.addEventListener("click", newEvent);
}
taskButton();
function newEvent() {
    let inputText = document.getElementById("texto-tarefa").value;
    let newItens = document.createElement("li");
    newItens.innerHTML = inputText;
    newItens.className = "itens-lista";
    newItens.addEventListener("click", paddingColor);
    createList.appendChild(newItens);
}
//requisito 7
paintList();
function paddingColor(event) {
    let taskList = document.querySelector(".click-class");
    if (taskList !== null) {
        taskList.className = "itens-lista";
    }
    event.target.className = "itens-lista click-class";
}
//requisito 8