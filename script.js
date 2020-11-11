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
//listaTarefas.addEventListener('click', mudarCor);

// Funação que Gerar Novas Lista de Tarefas
function novasTarefas() {
  const descricaoTarefa = textoTarefa.value;
  const novaTarefa = document.createElement('li');
  novaTarefa.className = 'minhas-listas';
  novaTarefa.innerText = descricaoTarefa;
  novaTarefa.addEventListener('click',mudarCor);
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

//Referenciando endereço das il
const todasTarefas = document.getElementsByClassName('minhas-listas');

function mudarCor(event){
  for(let i = 0; i <todasTarefas.length; i++) {
    todasTarefas[i].style.backgroundColor='';
  }
   event.target.style.backgroundColor = "rgb(128, 128, 128)";

  console.log('Clicando Alterar Cor...');

}
