const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalziados = document.getElementById('remover-finalizados');
criarTarefa.addEventListener("click", novasTarefas);
apagaTudo.addEventListener("click", removeTudo);
removerFinalziados.addEventListener('click', removeApenasFinalizados);
function novasTarefas() {
  const descricaoTarefa = textoTarefa.value;
  const novaTarefa = document.createElement('li');
  novaTarefa.className = 'toras-tarefas';
  novaTarefa.innerText = descricaoTarefa;
  novaTarefa.addEventListener('dblclick', tarefaCompleada);
  novaTarefa.addEventListener('click', mudarCor);
  listaTarefas.appendChild(novaTarefa);
  textoTarefa.value = '';
  console.log("clicando botão cria tarefa");
}
function removeTudo() {
  listaTarefas.innerHTML = '';
  console.log(" clicando apaga tudo");
}
function removeApenasFinalizados() {
  console.log('remove finalziados');
}
const todasTarefas = document.getElementsByClassName('toras-tarefas');
function mudarCor(event) {
  for (let i = 0; i < todasTarefas.length; i++) {
    todasTarefas[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
  console.log('Clicando Alterar Cor...');
}
function tarefaCompleada(event) {
  let elemento = event.target;
  if (elemento.classList.contains('completed')) {
    elemento.classList.remove('completed');
  } else {
    elemento.classList.add('completed');
  }
}
function removeApenasFinalizados(event) {
  let apagaConcluidos = document.querySelectorAll('.completed');
  apagaConcluidos.forEach((item)=>{
    if(item.classList.contains('completed')) {
      listaTarefas.removeChild(item);
    }
  });
}
