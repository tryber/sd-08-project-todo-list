let botaoCriar = document.getElementById("criar-tarefa");
let input = document.getElementById("texto-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let tarefas = listaTarefas.children;
let botaoApagaT = document.getElementById("apaga-tudo");
let botaoApagaF = document.getElementById("remover-finalizados");
let botaoApaga = document.getElementById("remover-selecionado")

botaoCriar.addEventListener("click", adicionaTarefa);
botaoApagaT.addEventListener("click", apagaTudo);
botaoApagaF.addEventListener("click", apagaFinalizados);
botaoApaga.addEventListener("click", apagaTarefa);

function adicionaTarefa() {
  let li = document.createElement("li");
  li.innerText = input.value;
  li.addEventListener("click", alteraCor);
  li.addEventListener("dblclick", riscaTarefa);
  listaTarefas.appendChild(li);
  input.value = "";
}

function alteraCor(event) {
  event.target.classList.toggle("selected");
  for(tarefa of tarefas) {
    tarefa != event.target && tarefa.classList.remove("selected");
  }
}

function riscaTarefa(event) {
  event.target.classList.toggle("completed");
}

function apagaTudo() {
  listaTarefas.innerHTML = "";
}

function apagaFinalizados() {
  for(tarefa of tarefas) {
    tarefa.classList.contains("completed") && listaTarefas.removeChild(tarefa);
  }
}

function apagaTarefa() {
  for(tarefa of tarefas) {
    tarefa.classList.contains("selected") && listaTarefas.removeChild(tarefa);
  }
}



