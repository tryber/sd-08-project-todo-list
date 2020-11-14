// Criar Tarefa
document.getElementById('criar-tarefa').addEventListener('click', () => {
  const taskText = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
  document.getElementById('lista-tarefas').innerHTML += `<li class='task'>${taskText.trim()} </li>`;
});

// Remover Todas
document.getElementById('apaga-tudo').addEventListener('click', () => {
  document.getElementById('lista-tarefas').innerHTML = '';
});

// Seleciona
document.getElementById('lista-tarefas').addEventListener('click', () => {
  if (event.target.classList.contains('task')) {
    document.querySelectorAll('.task').forEach((element) => {
      element.classList.remove('selected');
    });
    event.target.classList.add('selected');
  }
});
