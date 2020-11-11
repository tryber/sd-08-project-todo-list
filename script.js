const btnAdd = document.getElementById('criar-tarefa');
const btnRemove = document.getElementById('apaga-tudo');
const btnRemoveCompleted = document.getElementById('remover-finalizados');
const btnRemoveSelected = document.getElementById('remover-selecionado');
const btnSave = document.getElementById('salvar-tarefas');
const btnMoveCima = document.getElementById('mover-cima');
const btnMoveBaixo = document.getElementById('mover-baixo');
const textInput = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

function lookForSelecteds(itensLista) {
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

  lookForSelecteds(itensLista);

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

  localStorage.clear();
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

function getStorage() {
  for (let index = 0; index < localStorage.length; index += 2) {
    const pos = index + 1;
    const li = document.createElement('li');
    li.innerText = localStorage.getItem(index);
    li.className = localStorage.getItem(pos);
    li.addEventListener('click', selecionaTarefa);
    li.addEventListener('dblclick', completaTarefa);
    listaDeTarefas.append(li);
  }
}

function salvaTarefas() {
  const itensLista = document.querySelectorAll('li');

  for (let index = 0; index < itensLista.length; index += 1) {
    const index2 = index * 2;
    const pos = index2 + 1;
    localStorage.setItem(index2, itensLista[index].innerText);
    localStorage.setItem(pos, itensLista[index].className);
  }
}

function moverCima() {
  const itensLista = document.querySelectorAll('li');

  for (let index = 1; index < itensLista.length; index += 1) {
    const pos = index - 1;
    if (itensLista[index].className === 'selected' || itensLista[index].className === 'selected completed') {
      const temp = itensLista[index].innerText;
      const tempClass = itensLista[index].className;
      itensLista[index].innerText = itensLista[pos].innerText;
      itensLista[index].className = itensLista[pos].className;
      itensLista[pos].innerText = temp;
      itensLista[pos].className = tempClass;
    }
  }
}

function moverBaixo() {
  const itensLista = document.querySelectorAll('li');

  for (let index = (itensLista.length - 2); index >= 0; index -= 1) {
    const pos = index + 1;
    if (itensLista[index].className === 'selected' || itensLista[index].className === 'selected completed') {
      const temp = itensLista[index].innerText;
      const tempClass = itensLista[index].className;
      itensLista[index].innerText = itensLista[pos].innerText;
      itensLista[index].className = itensLista[pos].className;
      itensLista[pos].innerText = temp;
      itensLista[pos].className = tempClass;
    }
  }
}

btnAdd.addEventListener('click', adicionaTarefa);
btnMoveCima.addEventListener('click', moverCima);
btnMoveBaixo.addEventListener('click', moverBaixo);
btnRemove.addEventListener('click', apagaTudo);
btnRemoveCompleted.addEventListener('click', removerFinalizados);
btnRemoveSelected.addEventListener('click', removerSelecionado);
btnSave.addEventListener('click', salvaTarefas);

getStorage();
