function clearSelection() {
  const selected = document.getElementsByClassName('selected');
  selected.className = '';
  selected.style.backgroundColor = 'white';
}

function itemSelect(event) {
  if (event.target.style.backgroundColor === 'rgb(128, 128, 128)') {
    event.target.className = null;
    event.target.style.backgroundColor = 'white';
  }
  else {
    event.target.className = 'selected';
  }
}

function criarTarefa() {
  const input = document.getElementById('texto-tarefa');
  const listaTarefas = document.querySelector('#lista-tarefas');
  const novaTarefa = document.createElement('li');
  // novaTarefa.innerText = 'placeholder';
  novaTarefa.innerText = input.value;
  novaTarefa.addEventListener('click', itemSelect);
  listaTarefas.appendChild(novaTarefa);
  input.value = '';
}

document.querySelector('#criar-tarefa').addEventListener('click', criarTarefa);
