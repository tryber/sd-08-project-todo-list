window.onload = function () {
    localStorage.getItem("tarefas") != {} && (listaTarefas.innerHTML = localStorage.getItem("tarefas"));
  }

let criarButton = document.getElementById("criar-tarefa")
let input = document.getElementById("texto-tarefa")
let listaTarefas = document.getElementById("lista-tarefas")
let tarefas = listaTarefas.children

function criarTarefa() {
    let tarefa = document.createElement('li');
    tarefa.innerText = input.value;
    listaTarefas.appendChild(tarefa);
    tarefa.addEventListener('click', function() {
        event.target.classList.toggle("selected");
        for(item of tarefas) {
        item != event.target && item.classList.remove("selected");
            }
        }
    )
    input.value = "";
}

function apagaTudo() {
    listaTarefas.innerHTML = ""
}

function apagaTarefa() {
    for (item of tarefas) {
        item.classList.contains("selected") && listaTarefas.removeChild(item)
    }
}