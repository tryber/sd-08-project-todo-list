const listaTarefas = document.getElementById('lista-tarefas');
listaTarefas.innerHTML = localStorage.getItem('List');

document.addEventListener('click', (event) => {
  // Cria tarefa
  if (event.target.id === 'criar-tarefa') {
    const textoTarefa = document.getElementById('texto-tarefa');
    const tarefa = document.createElement('li');
    tarefa.innerHTML = textoTarefa.value;
    tarefa.classList.add('tarefa');
    textoTarefa.value = '';
    listaTarefas.appendChild(tarefa);
  }
  // Limpa a lista
  if (event.target.id === 'apaga-tudo') {
    listaTarefas.innerHTML = '';
  }
  // Remove tarefas finalizadas
  if (event.target.id === 'remover-finalizados') {
    const tarefaFinalizada = document.getElementsByClassName('completed');
    const lenght = tarefaFinalizada.length;
    for (let index = 0; index < lenght; index += 1) {
      tarefaFinalizada[0].parentElement.removeChild(tarefaFinalizada[0]);
    }
  }
  // Salva lista no localStorage
  if (event.target.id === 'salvar-tarefas') {
    localStorage.setItem('List', listaTarefas.innerHTML);
  }
  // Seleciona tarefa
  if (event.target.classList.contains('tarefa')) {
    const tarefas = document.querySelector('.selected');
    if (tarefas === null) {
      event.target.classList.add('selected');
    } else {
      tarefas.removeAttribute('style');
      tarefas.classList.remove('selected');
      event.target.classList.add('selected');
    }
  }
  // Marca tarefa como finalizada
  listaTarefas.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
});
