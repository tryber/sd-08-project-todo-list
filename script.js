const entrada = document.getElementById('texto-tarefa').value;
const listaTarefas = document.getElementById('lista-tarefas');
document.getElementById('criar-tarefa').addEventListener('click', (event) => {
      const tarefas = document.createElement('li');
      listaTarefas.appendChild(tarefas);
      tarefas.className = 'lista-de-tarefas';
      tarefas.innerHTML = entrada;
      entrada.innerHTML = '';
      event.target.listaTarefas = button;
});

