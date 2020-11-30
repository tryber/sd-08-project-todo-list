let createList = document.getElementById("lista-tarefas");
createList.innerHTML = localStorage.getItem("completedIten");
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
    createList.appendChild(newItens);
    newItens.addEventListener("click", paddingColor);
    newItens.addEventListener("dblclick", lineThrough);
    newItens.className = "itens-lista";
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
//requisito 11
let createFinalizedButton = document.getElementById("remover-finalizados");
createFinalizedButton.addEventListener("click", newFinalizedButton);
function newFinalizedButton() {
    let completedIten = document.querySelectorAll(".completed");
    for(let index = 0; index < completedIten.length; index += 1) {
        let removeFinalizedIten = completedIten[index];
        createList.removeChild(removeFinalizedIten);
    }
}
//requisito 12
//Fiz com ajuda do colega Erick Massaki
let finalizedIten  = document.getElementById("lista-tarefas");
let createSaveButton = document.getElementById("salvar-tarefas");
createSaveButton.addEventListener("click", newSaveButton);
function newSaveButton() {
    localStorage.setItem("completedIten", finalizedIten.innerHTML);
}

//requisito 13
//requisito 14
    let createSelectedButton = document.getElementById("remover-selecionado");
    createSelectedButton.addEventListener("click", newSelectedButton);
    function newSelectedButton() {
        let selectedIten = document.querySelector(".click-class");
        createList.removeChild(selectedIten);
    }
    