const listaTarefas = document.getElementById("lista-tarefas");
const textoTarefa = document.getElementById("texto-tarefa");
const criarTarefa = document.getElementById("criar-tarefa");
const apagaTudo = document.getElementById("apaga-tudo");
const removerFinalizados = document.getElementById("remover-finalizados");
function selecionaTarefa(event) {
  let todasTarefas = document.getElementsByClassName("todas-tarefas");
  for (let i = 0; i < todasTarefas.length; i++) {
    todasTarefas[i].classList.remove("selected");
  }
  event.target.classList.add("selected");
}
function tarefaCompletada(event) {
  event.target.classList.toggle("completed");
}
function criaTarefa(descricaoTarefa) {
  let novaTarefa = document.createElement("li");
  novaTarefa.className = "todas-tarefas";
  novaTarefa.innerText = descricaoTarefa;
  novaTarefa.addEventListener("dblclick", tarefaCompletada);
  novaTarefa.addEventListener("click", selecionaTarefa);
  return novaTarefa;
}
criarTarefa.addEventListener("click", () => {
  let descricaoTarefa = textoTarefa.value;
  listaTarefas.appendChild(criaTarefa(descricaoTarefa));
  textoTarefa.value = "";
});
function removeTudo(){
  listaTarefas.innerHTML = '';
}
apagaTudo.addEventListener("click", removeTudo);
​function removeApenasFinalizados(event) {
  let apagaConcluidos = document.querySelectorAll(".completed");
  apagaConcluidos.forEach((item) => item.remove());
}​
removerFinalizados.addEventListener("click", removeApenasFinalizados);​
function moveParaCima() {
  const selected = listaTarefas.querySelector(".selected");
  const anterior = selected.previousElementSibling;
  if (selected && anterior) {
    const parent = selected.parentNode;
    parent.insertBefore(selected, anterior);
  }
}​
botaoParaCima = document.getElementById("mover-cima");
botaoParaCima.addEventListener("click", moveParaCima);
​function moveParaBaixo() {
  const selected = listaTarefas.querySelector(".selected");
  const proximo = selected.nextElementSibling;
  if (selected && proximo) {
    const parent = selected.parentNode;
    parent.insertBefore(proximo, selected);
  }
}
​let botaoParaBaixo = document.getElementById("mover-baixo");
botaoParaBaixo.addEventListener("click", moveParaBaixo);
function removeItem() {
  const selected = listaTarefas.querySelector(".selected");
  selected.remove();
}​
let botaoRemoveItem = document.getElementById("remover-selecionado");
botaoRemoveItem.addEventListener("click", removeItem);
​function salvarTarefas() {
  localStorage.setItem("lista", listaTarefas.innerHTML);
}​
let botaoSalvarTarefas = document.getElementById("salvar-tarefas");
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
​window.onload = function () {
  let listaSalva = localStorage.getItem("lista");
  listaTarefas.innerHTML = listaSalva;
  const todasTarefas = listaTarefas.querySelectorAll("li");
  todasTarefas.forEach(tarefa => {
    tarefa.addEventListener('click', selecionaTarefa);
    tarefa.addEventListener('dblclick', tarefaCompletada);
  })
};
