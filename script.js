// Referenciando endereços da lista de atividades e das suas filhas
const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
// Referenciando endereços dos botões
const criarTarefa = document.getElementById('criar-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalziados = document.getElementById('remover-finalizados');
// Criando eventos para os botões
criarTarefa.addEventListener("click", novasTarefas);
apagaTudo.addEventListener("click", removeTudo);
removerFinalziados.addEventListener('click', removeApenasFinalizados);
// Funação que Gerar Novas Lista de Tarefas
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
//Função que Apaga todas as Tarefas
function removeTudo() {
  listaTarefas.innerHTML = '';
  console.log(" clicando apaga tudo");
}
//Função que Remove as Tarefas já realizadas
function removeApenasFinalizados() {
  console.log('remove finalziados');
}
//Referenciando endereço das li
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
