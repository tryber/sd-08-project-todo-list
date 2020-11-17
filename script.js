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
  novaTarefa.addEventListener("dblclick", riscaDaLista);
}

let listaDeTarefa = document.querySelectorAll(".cinzas");
let pintaCinza = document.getElementsByClassName("corDeFundoDasTarefas");

function marcarDeCinza(event) {
  for (let i = 0; i < pintaCinza.length; i++) {
    pintaCinza[i].classList.remove("corDeFundoDasTarefas"); //removendo a class de todos os elementos
  }
  const evento = event.target;
  evento.classList.add("corDeFundoDasTarefas"); //adicionando a class no elemento clicado
}

function apagaTudo() {
  while (listaOrdenada.hasChildNodes()) {
    listaOrdenada.removeChild(listaOrdenada.firstChild);
  }
}

function riscaDaLista(event) {
  const evento = event.target;
  evento.classList.add("completed");
}

botaoRevFinalizados.addEventListener("click", revFinalizados);

function revFinalizados(event) {}
