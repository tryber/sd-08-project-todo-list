window.onload = function () {
  localStorage.getItem("tarefas") != {} && (listaTarefas.innerHTML = localStorage.getItem("tarefas"));
}

let botaoCriar = document.getElementById("criar-tarefa");
let input = document.getElementById("texto-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let tarefas = listaTarefas.children;
let botaoApagaT = document.getElementById("apaga-tudo");
let botaoApagaF = document.getElementById("remover-finalizados");
let botaoApaga = document.getElementById("remover-selecionado");
let botaoSalva = document.getElementById("salvar-tarefas");

botaoCriar.addEventListener("click", adicionaTarefa);
botaoApagaT.addEventListener("click", apagaTudo);
botaoApagaF.addEventListener("click", apagaFinalizados);
botaoApaga.addEventListener("click", apagaTarefa);
botaoSalva.addEventListener("click", salvaTarefas);

function adicionaTarefa() {
  let li = document.createElement("li");
  li.innerText = input.value;
  li.addEventListener("click", alteraCor);
  li.addEventListener("dblclick", riscaTarefa);
  listaTarefas.appendChild(li);
  input.value = "";
}

function alteraCor(event) {
  for(tarefa of tarefas) {
    tarefa.classList.remove("selected");
  }
  event.target.classList.add("selected");
}

function riscaTarefa(event) {
  event.target.classList.toggle("completed");
}

function apagaTudo() {
  listaTarefas.innerHTML = "";
}

function apagaFinalizados() {
  let flag = tarefas.length;
  for(index = 0; index < flag; index++) {
    if(tarefas[index].classList.contains("completed")) {
      listaTarefas.removeChild(tarefas[index]);
      index--;
      flag--;
    }
  }
}

function apagaTarefa() {
  for(tarefa of tarefas) {
    tarefa.classList.contains("selected") && tarefa.remove();
  }
}

function salvaTarefas() {
  localStorage.setItem("tarefas", listaTarefas.innerHTML);
}



