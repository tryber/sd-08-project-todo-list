const criarTarefa = document.querySelector("#criar-tarefa");
const apagaTudo = document.querySelector("#apaga-tudo");
const apagarFinalizados = document.querySelector("#remover-finalizados");
const listaStorage = document.querySelector("#lista-tarefas");

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

function apagarTudo() {
  const lista = document.querySelector("#lista-tarefas");
  while (lista.hasChildNodes()) {
    lista.removeChild(lista.firstChild);
  }
}

apagaTudo.addEventListener("click", apagarTudo);

function apagarFinalizadas() {
  const lista = document.querySelectorAll(".lista");
  for (let indice = 0; indice < lista.length; indice += 1) {
    if (lista[indice].className == "lista completed") {
      lista[indice].remove();
    }
  }
}

apagarFinalizados.addEventListener("click", apagarFinalizadas);

if (typeof Storage !== undefined) {
  window.onload = function start() {
    if (localStorage.length > 0) apply();
    let btn = document.querySelector("#salvar-tarefas");
    btn.addEventListener("click", save, false);
  };

  function save() {
    for (let i = 0; i < listaStorage.childNodes.length; i += 1) {
      localStorage.setItem(
        listaStorage.childNodes[i].className + " " + i,
        listaStorage.childNodes[i].textContent
      );
    }
  }

  function apply() {
    for (let i = 0; i < localStorage.length; i += 1) {
      let lista = document.createElement("li");
      lista.innerText =
        localStorage.getItem(`lista ${i}`) ||
        localStorage.getItem(`lista completed ${i}`);
      lista.className = localStorage.getItem(`lista ${i}`)
        ? "lista"
        : "lista completed";
      listaStorage.appendChild(lista);
    }
  }
} else {
  alert("Sem recursos web storage");
}
