const criarTarefa = document.querySelector('#criar-tarefa');
criarTarefa.addEventListener('click', tarefa);

function tarefa (){
  const listaDeTarefas = document.querySelector('#lista-tarefas');
  const tarefa = document.getElementById('texto-tarefa');
  const lista = document.createElement('li');
  lista.innerText = tarefa.value;
  listaDeTarefas.appendChild(lista);
  tarefa.value = "";
}