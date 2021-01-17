function criaNovaTarefa() {
  const botaoAdicionar = document.getElementById("criar-tarefa");
  botaoAdicionar.addEventListener("click", function () {
    const entradaDeTarefas = document.getElementById("texto-tarefa");
    const listaDeTarefas = document.getElementById("lista-tarefas");
    if (entradaDeTarefas.value.length > 0) {
      const novaTarefa = document.createElement("li");
      novaTarefa.innerText = entradaDeTarefas.value;
      listaDeTarefas.appendChild(novaTarefa);
      entradaDeTarefas.value = "";
    }
  });
}
criaNovaTarefa();
