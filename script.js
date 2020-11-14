// Criar Tarefa
document.getElementById('criar-tarefa').addEventListener('click', () => {
  const taskText = document.getElementById('texto-tarefa').value || '';

  if (taskText.trim() !== '') {
    setTimeout(() => {
      document.getElementById('texto-tarefa').value = '';
    }, 100);
    setTimeout(() => {
      document.getElementById(
        'lista-tarefas'
      ).innerHTML += `<li class='task'>${taskText.trim()} </li>`;
    }, 200);
  }
});

// Remover Todas
document.getElementById('apaga-tudo').addEventListener('click', () => {
  setTimeout(() => {
    document.getElementById('lista-tarefas').innerHTML = '';
  }, 200);
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
