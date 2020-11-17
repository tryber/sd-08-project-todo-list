function criarTarefa() {
  const input = document.getElementById('texto-tarefa');
  const listaTarefas = document.querySelector('#lista-tarefas');
  const novaTarefa = document.createElement('li');
  // novaTarefa.innerText = 'placeholder';
  novaTarefa.innerText = input.value;
  listaTarefas.appendChild(novaTarefa);
  input.value = '';
}

document.querySelector('#criar-tarefa').addEventListener('click', criarTarefa);
