function clearSelection() {
  const selection = document.querySelector('.selected');
  if (selection !== null) {
    selection.classList.remove('selected');
  }
}

function itemSelect(event) {
  clearSelection();
  event.target.classList.add('selected');
}

function itemComplete(event) {
  if (event.target.classList.contains('complete') === true) {
    event.target.classList.remove('complete');
  } else {
    event.target.classList.add('complete');
  }
}

function criarTarefa() {
  const input = document.getElementById('texto-tarefa');
  const listaTarefas = document.querySelector('#lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.classList.add('tarefa');
  novaTarefa.innerText = input.value;
  novaTarefa.addEventListener('dblclick', itemComplete);
  novaTarefa.addEventListener('click', itemSelect);
  listaTarefas.appendChild(novaTarefa);
  input.value = '';
}

function apagarTarefas() {
  const listaTarefas = document.getElementsByClassName('tarefa');
  for (let index = 0; index < listaTarefas.length; index += 1) {
    listaTarefas[index].remove();
    index -= 1;
  }
}

function removerFinalizados() {
  const listaTarefas = document.getElementsByClassName('complete');
  for (let index = 0; index < listaTarefas.length; index += 1) {
    listaTarefas[index].remove();
    index -= 1;
  }
}

function removerSelecionado() {
  const tarefaSelecionada = document.querySelector('.selected');
  tarefaSelecionada.remove();
}

document.querySelector('#criar-tarefa').addEventListener('click', criarTarefa);
document.querySelector('#apaga-tudo').addEventListener('click', apagarTarefas);
document.querySelector('#remover-finalizados').addEventListener('click', removerFinalizados);
document.querySelector('#remover-selecionado').addEventListener('click', removerSelecionado);
