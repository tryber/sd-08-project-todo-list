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

let btnLimparLista = document.getElementById("apaga-tudo");

function limparLista() {
  let size = listaTarefa.children.length;
  for (let index = 0; index < size; index += 1) {
    listaTarefa.removeChild(listaTarefa.firstElementChild);
  }
}

btnLimparLista.addEventListener("click", limparLista);

let btnLimparCompletos = document.getElementById("remover-finalizados");

function removerFinalizados() {
  let finalizados = document.getElementsByClassName("completed");
  let size = finalizados.length;
  for (index = 0; index < size; index += 1) {
    listaTarefa.removeChild(finalizados[0]);
  }
}

btnLimparCompletos.addEventListener("click", removerFinalizados);
