const btnAdd = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

function selecionaTarefa(event) {
  const selected = document.getElementsByClassName('selected');
  let itensLista = document.querySelectorAll('li');
  let selecionar = event.target;

  for (let index = 0; index < itensLista.length; index += 1) {
    if (itensLista[index].className === 'selected completed') {
      itensLista[index].className = 'completed';
    }
    else if (itensLista[index].className === 'selected') {
      itensLista[index].className = 'item-lista';
    }
  }

  if (selecionar.className === 'completed') {
    selecionar.className = 'selected completed';
  }
  else {
    selecionar.className = 'selected';
  }
}

function completaTarefa(event) {
  let completed = event.target;

  if (completed.className === 'selected completed') {
    completed.className = 'selected';
  }
  else if (completed.className === 'selected') {
    completed.className = 'selected completed';
  }  
}

function adicionaTarefa() {
  const novaTarefa = document.createElement('li');
  novaTarefa.className = 'item-lista';
  novaTarefa.innerText = textInput.value;
  novaTarefa.addEventListener('click', selecionaTarefa);
  novaTarefa.addEventListener('dblclick', completaTarefa);
  listaDeTarefas.append(novaTarefa);
  textInput.value = '';
}

btnAdd.addEventListener('click', adicionaTarefa);
