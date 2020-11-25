document.getElementById('criar-tarefa').addEventListener('click', (event) => {
  const entrada = document.getElementById('texto-tarefa').value;
  const listaTarefas = document.getElementById('lista-tarefas');
  const tarefas = document.createElement('li');
  listaTarefas.appendChild(tarefas);
  tarefas.className = 'lista-de-tarefas';
  tarefas.innerHTML = entrada;
  document.getElementById('texto-tarefa').value = '';
});

