let btnCriarTarefa = document.getElementById("criar-tarefa");
let tarefaTexto = document.getElementById("texto-tarefa");
let listaTarefa = document.getElementById("lista-tarefas");

btnCriarTarefa.addEventListener("click", function () {
  let tarefa = tarefaTexto.value;
  let tarefaItem = document.createElement("li");
  tarefaItem.innerHTML = tarefa;
  listaTarefa.appendChild(tarefaItem);
  tarefaItem.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "rgb(128,128,128)";
  });
});
