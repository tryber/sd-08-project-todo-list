// Criar Tarefa
document.getElementById('criar-tarefa').addEventListener('click', () => {
  document.getElementById('lista-tarefas').innerHTML += `<li class='task'>${
    document.getElementById('texto-tarefa').value
  } </li>`;
  document.getElementById('texto-tarefa').value = '';
});

// Remover Todas
document.getElementById('apaga-tudo').addEventListener('click', () => {
  document.getElementById('lista-tarefas').innerHTML = '';
});
