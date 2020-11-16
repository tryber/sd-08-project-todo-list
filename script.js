const listaTarefas = document.getElementById('list-tarefas');

document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    const textoTarefa = document.getElementById('texto-tarefa');
    const tarefa = document.createElement('li');
    tarefa.innerHTML = textoTarefa.value;
    tarefa.classList.add('tarefa');
    textoTarefa.value = '';
    textoTarefa.appendChild(tarefa);
  }
  
  if (event.target.id === 'apaga-tudo') {
    listaTarefas.innerHTML = '';
  }

  if (event.target.id === 'remover-finalizados') {
    const tarefaFinalizada = document.getElementsByClassName('completed');
    const lenght = tarefaFinalizada.length;
    for (let index = 0; index < lenght; index++) {
      tarefaFinalizada[0].parentElement.removeChild(tarefaFinalizada[0]);
    }
  }

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
});

listaTarefas.addEventListener('dbclick', (event) => {
  event.target.classList.toggle('completed');
});
