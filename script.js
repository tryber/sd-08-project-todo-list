const criarTarefa = document.querySelector("#criar-tarefa");
const apagaTudo = document.querySelector("#apaga-tudo");

function tarefa() {
  const listaDeTarefas = document.querySelector("#lista-tarefas");
  const tarefa = document.getElementById("texto-tarefa");
  const lista = document.createElement("li");
  lista.className = "lista";
  lista.innerText = tarefa.value;
  listaDeTarefas.appendChild(lista);
  tarefa.value = "";
}

criarTarefa.addEventListener("click", tarefa);

function corLista(event) {
  const evento = event.target;
  const estilo = event.target.style;
  const lista = document.querySelectorAll(".lista");
  if (evento.className == "lista" || evento.className == "lista completed") {
    for (let index = 0; index < lista.length; index += 1) {
      lista[index].style.backgroundColor = "rgb(255, 255, 255)";
    }
    if (estilo.backgroundColor != "rgb(128, 128, 128)") {
      estilo.backgroundColor = "rgb(128, 128, 128)";
    }
  }
}

addEventListener("click", corLista);

function riscado(event) {
  const evento = event.target;
  if (evento.className == "lista" || evento.className == "lista completed") {
    if (evento.className == "lista") {
      evento.className = "lista completed";
    } else {
      evento.className = "lista";
    }
  }
}

addEventListener("dblclick", riscado);

function apagar() {
  const lista = document.querySelector("#lista-tarefas");
  while (lista.hasChildNodes()) {
    lista.removeChild(lista.firstChild);
  }
}

apagaTudo.addEventListener("click", apagar);
