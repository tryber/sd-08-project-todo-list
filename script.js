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

function selecionaItemDaLista() {
  const listaDeTarefas = document.getElementById("lista-tarefas");
  listaDeTarefas.addEventListener("click", function (evento) {
    const itensDaLista = document.getElementsByTagName("li");
    for (let i = 0; i < itensDaLista.length; i += 1) {
      itensDaLista[i].style.backgroundColor = "";
    }
    evento.target.style.backgroundColor = "rgb(128, 128, 128)";
  });
}
selecionaItemDaLista();

function riscaItemDaLista() {
  const listaDeTarefas = document.getElementById("lista-tarefas");
  listaDeTarefas.addEventListener("dblclick", function (evento) {
    if (evento.target.className === "completed") {
      evento.target.className = "";
    } else {
      evento.target.className = "completed";
    }
  });
}
riscaItemDaLista();
