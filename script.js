const receberTarefa = document.getElementById('texto-tarefa');
const btnCriar = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const tarefaAlvo = document.getElementById('lista-tarefas');

function criarItemLista () {
  if (receberTarefa.value.length > 0) {
    let tarefaLi = document.createElement('li');
    tarefaLi.innerText = receberTarefa.value;
    tarefaLi.className = 'tarefa';
    listaTarefas.appendChild(tarefaLi);
    receberTarefa.value = '';
  } else {
    alert('Nenhuma tarefa foi definida.');
  }
}

btnCriar.addEventListener('click', criarItemLista);

function classeSelecionado (evt) {
  if (evt.target.className.includes('tarefa')) {
    if (document.querySelector('.selecionado') !== null) {
      document.querySelector('.selecionado').classList.remove('selecionado');
      evt.target.classList.add('selecionado');
    } else {
      evt.target.classList.add('selecionado');
    }
  }
}

tarefaAlvo.addEventListener('click', classeSelecionado);

function classeCompleted (evt) {
  if (evt.target.className.includes('tarefa')) {
    if (evt.target.className.includes('completed') === false) {
      evt.target.classList.add('completed');
    } else {
      evt.target.classList.remove('completed');
    }
  }
}

tarefaAlvo.addEventListener('dblclick', classeCompleted);