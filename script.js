let listaTarefas = document.getElementById("lista-tarefas");

function criaTarefa () {
    let entradaTarefa = document.getElementById("texto-tarefa");
    let itemList = document.createElement("li");
    itemList.innerText = entradaTarefa.value;
    listaTarefas.appendChild(itemList);
    entradaTarefa.value = "";
}
document.getElementById("criar-tarefa").addEventListener("click",criaTarefa);