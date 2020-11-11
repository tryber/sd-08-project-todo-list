function adicionaTarefa() {
  const listaOrdenada = document.getElementById('lista-tarefas');
  const buttonAdicionar = document.getElementById('criar-tarefa');
  const textoTarefa = document.getElementById('texto-tarefa');
  buttonAdicionar.addEventListener('click', function () {
    const tarefa = document.createElement('li');
    tarefa.className = 'tarefa';
    tarefa.innerText = textoTarefa.value;
    listaOrdenada.appendChild(tarefa);
    textoTarefa.value = '';
  });
}
adicionaTarefa();

function removeColor() {
  const listaTarefas = document.querySelector('#lista-tarefas');
  const tarefas = listaTarefas.children;
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].classList.remove('selected');
  }
}

function adicionaColor() {
  const listaTarefas = document.querySelector('#lista-tarefas');
  listaTarefas.addEventListener('click', function (event) {
    removeColor();
    event.target.classList.add('selected');
  });
}
adicionaColor();

function tarefaCompleta() {
  const listaTarefas = document.querySelector('#lista-tarefas');
  listaTarefas.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
tarefaCompleta();

function apagaTudo() {
  const apagaButton = document.getElementById('apaga-tudo');
  apagaButton.addEventListener('click', function () {
    const listaTarefas = document.getElementById('lista-tarefas');
    listaTarefas.innerText = '';
  });
}
apagaTudo();

function removeCompletos() {
  const removeButton = document.getElementById('remover-finalizados');
  const listaTarefas = document.getElementById('lista-tarefas');
  removeButton.addEventListener('click', function () {
    const tarefas = document.querySelectorAll('.completed');
    for (let i = 0; i < tarefas.length; i += 1) {
      const tarefasCompletas = tarefas[i];
      listaTarefas.removeChild(tarefasCompletas);
    }
  });
}
removeCompletos();
