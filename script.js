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

function apagaTodasAsTarefas() {
  const botaoApagaTudo = document.getElementById("apaga-tudo");
  botaoApagaTudo.addEventListener("click", function () {
    const listaDeTarefas = document.getElementById("lista-tarefas");
    listaDeTarefas.innerHTML = "";
  });
}
apagaTodasAsTarefas();

function apagaAsTarefasCompletadas() {
  const listaDeTarefas = document.getElementById("lista-tarefas");
  const tarefasCompletadas = document.querySelectorAll(".completed");
  const botaoApagaTarefasCompletadas = document.getElementById(
    "remover-finalizados"
  );
  botaoApagaTarefasCompletadas.addEventListener("click", function () {
    const tarefasCompletadas = document.querySelectorAll(".completed");
    for (let i = 0; i < tarefasCompletadas.length; i += 1) {
      listaDeTarefas.removeChild(tarefasCompletadas[i]);
    }
  });
}
apagaAsTarefasCompletadas();

function salvaListaDeTarefas() {
  const botaoSalvaLista = document.getElementById("salvar-tarefas");
  const listaDeTarefas = document.getElementById("lista-tarefas");
  botaoSalvaLista.addEventListener("click", function () {
    localStorage.setItem("Lista", listaDeTarefas.innerHTML);
  });
  listaDeTarefas.innerHTML = localStorage.getItem("Lista");
}
salvaListaDeTarefas();
