let orderedList = [];
let createList = document.getElementById("lista-tarefas");
for(let index = 0; index < 3; index += 1) {
    let newList = orderedList[index];
    let listItens = document.createElement("li");
    listItens.innerHTML = newList;
    listItens.className = "itens-lista";
    createList.appendChild(listItens);
}

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