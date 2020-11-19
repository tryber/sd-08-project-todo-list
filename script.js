let createList = document.getElementById("lista-tarefas");
//requisitos 5
let createTaskButton = document.getElementById("criar-tarefa");
function taskButton() {
    createTaskButton.addEventListener("click", newEvent);
}
taskButton();
function newEvent() {
    let inputText = document.getElementById("texto-tarefa").value;
    let newItens = document.createElement("li");
    newItens.innerHTML = inputText;
    inputText.value = "";
    // Source: https://www.guj.com.br/t/limpar-um-inputtext/203164/3
    newItens.className = "itens-lista";
    newItens.addEventListener("click", paddingColor);
    newItens.addEventListener("dblclick", lineThrough);
    createList.appendChild(newItens);
}
//requisito 6
//requisitos 7 e 8
function paddingColor(event) {
    let taskList = document.querySelector(".click-class");
    if (taskList !== null) {
        taskList.className = "itens-lista";
    }
    event.target.className = "itens-lista click-class";
}
//requisito 9
function lineThrough(event) {
    let changeLineStyle = document.querySelector("completed");
    if (changeLineStyle !== null) {
        changeLineStyle.className = "itens-lista"
    }
    event.target.className = "itens-lista completed";
}