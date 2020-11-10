function createListItem() {
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
    novaTarefa.addEventListener('dblclick', () => {
      novaTarefa.classList.toggle('completed');
    });
    lista.appendChild(novaTarefa);

    input.value = '';
  }
};

document.querySelector('#criar-tarefa').addEventListener('click', createListItem);
document.querySelector('#texto-tarefa').addEventListener('change', createListItem);

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  const listItems = document.querySelectorAll('li');

  for (let i = listItems.length - 1; i >=0; i -= 1) {
    listItems[i].remove();
  }
});

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  const listItems = document.querySelectorAll('.completed');

  for (let i = listItems.length - 1; i >=0; i -= 1) {
    listItems[i].remove();
  }
});