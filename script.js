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
      itensDaLista[i].classList.remove("selected");
    }
    evento.target.classList.add("selected");
  });
}
selecionaItemDaLista();

function riscaItemDaLista() {
  const listaDeTarefas = document.getElementById("lista-tarefas");
  listaDeTarefas.addEventListener("dblclick", function (evento) {
    if (evento.target.classList.contains("completed")) {
      evento.target.classList.remove("completed");
    } else {
      evento.target.classList.add("completed");
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

//

function moveParaCima() {
  const listaDeTarefas = document.getElementById("lista-tarefas");
  const botaoMoveParaCima = document.getElementById("mover-cima");
  botaoMoveParaCima.addEventListener("click", function () {
    let tarefaSelecionada = document.querySelector(".selected");
    const primeiraTarefa = document.getElementById("lista-tarefas")
      .firstElementChild;
    let tarefaAnterior = tarefaSelecionada.previousElementSibling;
    let auxiliar = document.createElement("li");
    auxiliar.id = "auxiliar";
    if (tarefaSelecionada !== primeiraTarefa) {
      listaDeTarefas.appendChild(auxiliar);
      auxiliar.innerHTML = tarefaSelecionada.innerHTML;
      auxiliar.classList = tarefaSelecionada.classList;
      tarefaSelecionada.innerHTML = tarefaAnterior.innerHTML;
      tarefaSelecionada.classList = tarefaAnterior.classList;
      tarefaAnterior.innerHTML = auxiliar.innerHTML;
      tarefaAnterior.classList = auxiliar.classList;
      const elementoParaDeletar = document.getElementById("auxiliar");
      listaDeTarefas.removeChild(elementoParaDeletar);
    }
  });
}
moveParaCima();

function moveParaBaixo() {
  const listaDeTarefas = document.getElementById("lista-tarefas");
  const botaoMoveParaBaixo = document.getElementById("mover-baixo");
  botaoMoveParaBaixo.addEventListener("click", function () {
    let tarefaSelecionada = document.querySelector(".selected");
    const ultimaTarefa = document.getElementById("lista-tarefas")
      .lastElementChild;
    let tarefaPosterior = tarefaSelecionada.nextElementSibling;
    let auxiliar = document.createElement("li");
    auxiliar.id = "auxiliar";
    if (tarefaSelecionada !== ultimaTarefa) {
      listaDeTarefas.appendChild(auxiliar);
      auxiliar.innerHTML = tarefaSelecionada.innerHTML;
      auxiliar.classList = tarefaSelecionada.classList;
      tarefaSelecionada.innerHTML = tarefaPosterior.innerHTML;
      tarefaSelecionada.classList = tarefaPosterior.classList;
      tarefaPosterior.innerHTML = auxiliar.innerHTML;
      tarefaPosterior.classList = auxiliar.classList;
      const elementoParaDeletar = document.getElementById("auxiliar");
      listaDeTarefas.removeChild(elementoParaDeletar);
    }
  });
}
moveParaBaixo();

function apagaTarefaSelecionada() {
  const listaDeTarefas = document.getElementById("lista-tarefas");
  const botaoApagaTarefaSelecionada = document.getElementById(
    "remover-selecionado"
  );
  botaoApagaTarefaSelecionada.addEventListener("click", function () {
    const tarefaSelecionada = document.querySelectorAll(".selected");
    listaDeTarefas.removeChild(tarefaSelecionada[0]);
  });
}
apagaTarefaSelecionada();
