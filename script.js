// Referenciando endereços da lista de atividades e das suas filhas
const maeTarefa = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');

// Referenciando endereços dos botões
const butoomCriaTarefa = document.getElementById('criar-tarefa');
const butoomApagaTodasAsTarefas = document.getElementById('apaga-tudo');
const butoomRemoveTarefasFinalziadas = document.getElementById('remover-finalizados');

// Criando eventos para os botões
butoomCriaTarefa.addEventListener("click", geraTarefa);
butoomApagaTodasAsTarefas.addEventListener("click", apagaTudo);
butoomRemoveTarefasFinalziadas.addEventListener('click', removeFinalizados);

// Funação que Gerar Novas Lista de Tarefas
function geraTarefa(){
  let descricaoTarefa = textoTarefa.value;
  let novaTarefa = document.createElement('li');
  novaTarefa.innerText = descricaoTarefa;
  maeTarefa.appendChild(novaTarefa);
  textoTarefa.value = '';

console.log("clicando botão cria tarefa");
}
//Função que Apaga todas as Tarefas
function apagaTudo(){
  maeTarefa.innerHTML ='';

console.log(" clicando apaga tudo");
}

//Função que Remove as Tarefas já realizadas
function removeFinalizados(){
  console.log('remove finalziados')
}


