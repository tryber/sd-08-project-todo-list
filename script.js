const listaTarefas = document.getElementById('lista-tarefas');
const descriacaoTarefas = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const apagaTodasTarefas = document.getElementById('apaga-tudo');
const removeTarefasFinalizadas = document.getElementById('remover-finalizados');
function selecionaTarefa(event) {
  let todasTarefas = document.getElementsByClassName('todas-tarefas');
  for (let i = 0; i < todasTarefas.length; i++) {
    todasTarefas[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
function tarefaCompletada(event) {
  event.target.classList.toggle('completed'); // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
}
function criaTarefa(descricaoTarefa) {
  let novaTarefa = document.createElement('li');
  novaTarefa.className = 'todas-tarefas';
  novaTarefa.innerText = descricaoTarefa;
  novaTarefa.addEventListener('dblclick', tarefaCompletada);
  novaTarefa.addEventListener('click', selecionaTarefa);
  return novaTarefa;
}
criarTarefa.addEventListener("click", function () {
  let descricaoTarefa = descriacaoTarefas.value;
  listaTarefas.appendChild(criaTarefa(descricaoTarefa));
  descriacaoTarefas.value = '';
});
function removeTudo() {
  listaTarefas.innerHTML = '';
}
apagaTodasTarefas.addEventListener("click", removeTudo);
function removeFinalizadas() {
  let apagaConcluidos = document.querySelectorAll('.completed');
  apagaConcluidos.forEach((item) => item.remove()); //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
}
removeTarefasFinalizadas.addEventListener('click', removeFinalizadas);
function moveParaCima() {
  const selected = listaTarefas.querySelector('.selected');
  const anterior = selected.previousElementSibling; // https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling
  if (selected && anterior) {
    const parent = selected.parentNode;
    parent.insertBefore(selected, anterior);
  }
}
botaoParaCima = document.getElementById('mover-cima');
botaoParaCima.addEventListener('click', moveParaCima);
function moveParaBaixo() {
  const selected = listaTarefas.querySelector('.selected');
  const proximo = selected.nextElementSibling;
  if (selected && proximo) {
    const parent = selected.parentNode;
    parent.insertBefore(proximo, selected);
  }
}
let botaoParaBaixo = document.getElementById('mover-baixo');
botaoParaBaixo.addEventListener('click', moveParaBaixo);
function removeItem() {
  const selected = listaTarefas.querySelector('.selected');
  selected.remove();
}
let botaoRemoveItem = document.getElementById('remover-selecionado');
botaoRemoveItem.addEventListener('click', removeItem);
function salvarTarefas() {
  localStorage.setItem("lista", listaTarefas.innerHTML);
}
let botaoSalvarTarefas = document.getElementById('salvar-tarefas');
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
window.onload = function () {
  let listaSalva = localStorage.getItem("lista");
  listaTarefas.innerHTML = listaSalva;
  const todasTarefas = listaTarefas.querySelectorAll('.todas-tarefas');
  todasTarefas.forEach(tarefa => {
    tarefa.addEventListener('click', selecionaTarefa);
    tarefa.addEventListener('dblclick', tarefaCompletada);
  });
};



