//Referenciar
let botaoCriarTarefas = document.querySelector("#criar-tarefa");
let botaoApagarTudo = document.querySelector("#apaga-tudo");
let botaoRevFinalizados = document.querySelector("#remover-finalizados");
let listaOrdenada = document.querySelector("#lista-tarefas");
let entradaTarefa = document.querySelector("#texto-tarefa");

botaoCriarTarefas.addEventListener("click", criaTarefas);
botaoApagarTudo.addEventListener("click", apagaTudo);
botaoRevFinalizados.addEventListener("click", revFinalizados);

function criaTarefas() {
  const novaTarefa = document.createElement("li"); //criando uma tag
  listaOrdenada.appendChild(novaTarefa); //Local onde ela vai ser armazenada
  novaTarefa.innerText = entradaTarefa.value; //value é o valor que o input recebea
  novaTarefa.addEventListener("click", marcarDeCinza); // adicionando eventos para todos lis criados
  novaTarefa.className = "cinzas";
  entradaTarefa.value = "";
}

let listaDeTarefa = document.querySelectorAll(".cinzas");
let pintaCinza = document.getElementsByClassName("corDeFundoDasTarefas");

function marcarDeCinza(event) {
  for (let i = 0; i < pintaCinza.length; i++) {
    pintaCinza[i].classList.remove("corDeFundoDasTarefas");
  }
  const evento = event.target;
  evento.classList.add("corDeFundoDasTarefas");
}

function apagaTudo() {
  while (listaOrdenada.hasChildNodes()) {
    listaOrdenada.removeChild(listaOrdenada.firstChild);
  }
}

function revFinalizados() {
  console.log("Estou removendo todas tarefas");
}
