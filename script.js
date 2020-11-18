let orderedList = [];
let createList = document.getElementById("lista-tarefas");
for(let index = 0; index < 3; index += 1) {
    let newList = orderedList[index];
    let listItens = document.createElement("li");
    listItens.innerHTML = newList;
    listItens.className = "itens-lista";
    createList.appendChild(listItens);
}
//requisitos 5 e 6
let createTaskButton = document.getElementById("criar-tarefa");
function taskButton() {
    createTaskButton.addEventListener("click", newEvent);
}
taskButton();
function newEvent() {
    let inputText = document.getElementById("texto-tarefa");
    let newItens = document.createElement("li");
    newItens.innerHTML = inputText;
    newItens.className = "itens-lista";
    createList.appendChild(newItens);
}
//requisito 7
window.onload = selectWhite;
function selectWhite() {
   let selectListIten = document.getElementById("itens-lista");
   selectListIten.className = "color-list-init"
}
let taskList = document.getElementsByClassName("itens-lista");
function paintList() {
    for(let index = 0; index < taskList.length; index += 1) {
        taskList[index].addEventListener("click", paddingColor);
    }
}
paintList();
function paddingColor(event) {
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
}