let btnCriarTarefa = document.getElementById("criar-tarefa");
let tarefaTexto = document.getElementById("texto-tarefa");
let listaTarefa = document.getElementById("lista-tarefas");

function clearSelection() {
  for (tarefa of listaTarefa.children) {
    tarefa.classList.remove("selected");
  }
}

if (localStorage.getItem("tarefas") != null) {
  let listaLocal = localStorage.getItem("tarefas").split(",");
  let listaCompleted = localStorage.getItem("completos").split(",");

  if (localStorage.getItem("tarefas") != "") {
    for (index = 0; index < listaLocal.length; index += 1) {
      adicionarTarefa(listaLocal[index]);
      if (listaCompleted.includes(listaLocal[index])) {
        listaTarefa.lastElementChild.classList.add("completed");
      }
    }
  }
}

function adicionarTarefa(tarefaTexto) {
  let tarefaItem = document.createElement("li");
  tarefaItem.innerHTML = tarefaTexto;
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
}
btnCriarTarefa.addEventListener("click", function () {
  let tarefa = tarefaTexto.value;
  tarefaTexto.value = "";
  adicionarTarefa(tarefa);
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

let btnSalvar = document.getElementById("salvar-tarefas");
function getData() {
  let tarefasData = [];
  let completedData = [];
  for (tarefa of listaTarefa.children) {
    tarefasData.push(tarefa.innerHTML);
    if (tarefa.classList.contains("completed")) {
      completedData.push(tarefa.innerHTML);
    }
  }
  return { tarefas: tarefasData, completos: completedData };
}
btnSalvar.addEventListener("click", function () {
  let data = getData();
  for (key of Object.keys(data)) {
    localStorage.setItem(key, data[key]);
  }
});
