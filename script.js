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
  novaTarefa.innerText = entradaTarefa.value; //value é o valor que o input recebe
}

function apagaTudo() {
  console.log("Estou apagando Tudo");
}

function revFinalizados() {
  console.log("Estou removendo todas tarefas");
}
