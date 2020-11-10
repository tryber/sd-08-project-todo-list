document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  if (input.value !== '') {
    const lista = document.querySelector('#lista-tarefas');
    const novaTarefa = document.createElement('li');

    novaTarefa.innerText = input.value;
    novaTarefa.addEventListener('click', () => {
      const selecteds = document.querySelectorAll('.selected');
      if (novaTarefa.classList.contains('selected')) {
        novaTarefa.classList.remove('selected');
      } else if (selecteds.length > 0) {
        selecteds[0].classList.remove('selected');
        novaTarefa.classList.add('selected');
      } else {
        novaTarefa.classList.add('selected');
      }
    });
    lista.appendChild(novaTarefa);

    input.value = '';
  }
});
