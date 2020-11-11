window.onload = function () {
  if (localStorage.getItem("tarefas") != {}) {
    listaTarefas.innerHTML = localStorage.getItem("tarefas");
    for (tarefa of tarefas) {
      tarefa.addEventListener("click", alteraCor);
      tarefa.addEventListener("dblclick", riscaTarefa);
    }
  }
}

let botaoCriar = document.getElementById("criar-tarefa");
let input = document.getElementById("texto-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let tarefas = listaTarefas.children;
let botaoApagaT = document.getElementById("apaga-tudo");
let botaoApagaF = document.getElementById("remover-finalizados");
let botaoApaga = document.getElementById("remover-selecionado");
let botaoSalva = document.getElementById("salvar-tarefas");
let botaoTarefaC = document.getElementById("mover-cima");
let botaoTarefaB = document.getElementById("mover-baixo");

botaoCriar.addEventListener("click", adicionaTarefa);
botaoApagaT.addEventListener("click", apagaTudo);
botaoApagaF.addEventListener("click", apagaFinalizados);
botaoApaga.addEventListener("click", apagaTarefa);
botaoSalva.addEventListener("click", salvaTarefas);
botaoTarefaC.addEventListener("click", moveUpTask);
botaoTarefaB.addEventListener("click", moveBottomTask);

function adicionaTarefa() {
  let li = document.createElement("li");
  li.innerText = input.value;
  li.addEventListener("click", alteraCor);
  li.addEventListener("dblclick", riscaTarefa);
  li.classList.add("task");
  listaTarefas.appendChild(li);
  input.value = "";
}

function alteraCor(event) {
  let elemento = event.target;
  for (tarefa of tarefas) {
    tarefa != elemento && tarefa.classList.remove("selected");
  }
  elemento.classList.contains("selected") ? elemento.classList.remove("selected") : elemento.classList.add("selected");
}

function riscaTarefa(event) {
  event.target.classList.toggle("completed");
}

function apagaTudo() {
  listaTarefas.innerHTML = "";
}

function apagaFinalizados() {
  let flag = tarefas.length;
  for (index = 0; index < flag; index++) {
    if (tarefas[index].classList.contains("completed")) {
      listaTarefas.removeChild(tarefas[index]);
      index--;
      flag--;
    }
  }
}

function apagaTarefa() {
  for (tarefa of tarefas) {
    tarefa.classList.contains("selected") && tarefa.remove();
  }
}

function salvaTarefas() {
  localStorage.setItem("tarefas", listaTarefas.innerHTML);
}

function moveTarefaC() {
  let elemento = document.querySelector(".selected");
  //listaTarefas.insertBefore(elemento, elemento.previousSibling);
  elemento && elemento.previousSibling && elemento.previousSibling.insertAdjacentElement("beforebegin", elemento);
}

function moveTarefaB() {
  let elemento = document.querySelector(".selected");
  elemento && elemento.nextSibling && elemento.nextSibling.insertAdjacentElement("afterend", elemento);
}

function moveUpTask(event) {
  const childNode = document.querySelectorAll('.task');
  for (let index = 0; index < childNode.length; index += 1) {
      if (childNode[index].classList.contains('selected')) {
          if (index > 0) {
              childNode[index].parentElement.insertBefore(childNode[index], childNode[index - 1]);
          }
      }
  }
}
function moveBottomTask(event) {
  const childNode = document.querySelectorAll('.task');
  for (let index = 0; index < childNode.length; index += 1) {
      if (childNode[index].classList.contains('selected')) {
      if (index + 1 < childNode.length) {
          childNode[index + 1].parentElement.insertBefore(childNode[index + 1], childNode[index]);
          }
      }
  }
}
