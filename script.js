document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  if (input.value !== '') {
    const lista = document.querySelector('#lista-tarefas');
    const novaTarefa = document.createElement('li');

    novaTarefa.innerText = input.value;
    novaTarefa.addEventListener('click', () => {
      novaTarefa.classList.toggle('selected');
    });
    lista.appendChild(novaTarefa);

    input.value = '';
  }
});
