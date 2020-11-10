let btnCriarTarefa = document.getElementById("criar-tarefa");
let tarefaTexto = document.getElementById("texto-tarefa");
let listaTarefa = document.getElementById("lista-tarefas");

function clearSelection() {
  for (tarefa of listaTarefa.children) {
    tarefa.classList.remove("selected");
  }
}
btnCriarTarefa.addEventListener("click", function () {
  let tarefa = tarefaTexto.value;
  tarefaTexto.value = "";
  let tarefaItem = document.createElement("li");
  tarefaItem.innerHTML = tarefa;
  listaTarefa.appendChild(tarefaItem);
  tarefaItem.addEventListener("click", function (e) {
    clearSelection();
    e.target.classList.add("selected");
  });
  tarefaItem.addEventListener("dblclick", function (e) {
    let classes = e.target.classList;
    clearSelection();
    if (classes.contains("completed")) {
      e.target.classList.remove("completed");
    } else {
      e.target.classList.add("completed");
    }
  });
});
