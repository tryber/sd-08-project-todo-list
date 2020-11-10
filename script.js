const btnAdd = document.getElementById('criar-tarefa');
const btnRemove = document.getElementById('apaga-tudo');
const btnRemoveCompleted = document.getElementById('remover-finalizados');
const btnRemoveSelected = document.getElementById('remover-selecionado');
const textInput = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

function lookForSelecteds (itensLista) {
  for (let index = 0; index < itensLista.length; index += 1) {
    if (itensLista[index].className === 'selected completed') {
      itensLista[index].className = 'completed';
    } else if (itensLista[index].className === 'selected') {
      itensLista[index].className = 'item-lista';
    }
  }
}

function selecionaTarefa(event) {
  const itensLista = document.querySelectorAll('li');
  const selecionar = event.target;

  lookForSelecteds(itensLista)

  if (selecionar.className === 'completed') {
    selecionar.className = 'selected completed';
  } else {
    selecionar.className = 'selected';
  }
}

function completaTarefa(event) {
  const completed = event.target;

  if (completed.className === 'selected completed') {
    completed.className = 'selected';
  } else if (completed.className === 'selected') {
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

function apagaTudo() {
  const itensLista = document.querySelectorAll('li');

  for (let index = 0; index < itensLista.length; index += 1) {
    listaDeTarefas.lastElementChild.remove();
  }
}

function removerFinalizados() {
  const itensLista = document.querySelectorAll('li');

  for (let index = 0; index < itensLista.length; index += 1) {
    if (itensLista[index].className === 'completed' || itensLista[index].className === 'selected completed') {
      itensLista[index].remove();
    }
  }
}

function removerSelecionado() {
    const itensLista = document.querySelectorAll('li');
  
    for (let index = 0; index < itensLista.length; index += 1) {
      if (itensLista[index].className === 'selected' || itensLista[index].className === 'selected completed') {
        itensLista[index].remove();
      }
    }
  }

btnAdd.addEventListener('click', adicionaTarefa);
btnRemove.addEventListener('click', apagaTudo);
btnRemoveCompleted.addEventListener('click', removerFinalizados);
btnRemoveSelected.addEventListener('click', removerSelecionado);
