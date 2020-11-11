
let criarButton = document.getElementById("criar-tarefa")
let input = document.getElementById("texto-tarefa")
let listaTarefas = document.getElementById("lista-tarefas")

function criarTarefa() {
    let tarefa = document.createElement('li');
    tarefa.innerText = input.value;
    listaTarefas.appendChild(tarefa);
    input.value = "";
}
