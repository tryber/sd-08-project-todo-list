adicionaTarefa();
function adicionaTarefa() {
  let listaOrdenada = document.getElementById('lista-tarefas')
  let buttonAdicionar = document.getElementById('criar-tarefa');
  let textoTarefa = document.getElementById('texto-tarefa');
  buttonAdicionar.addEventListener('click', function () {
    let tarefa = document.createElement('li');
    tarefa.className = 'tarefa';
    tarefa.innerText = textoTarefa.value;
    listaOrdenada.appendChild(tarefa);
    textoTarefa.value = '';
  });
}

function removeColor() {
  let listaTarefas = document.querySelector('#lista-tarefas');
  let tarefas = listaTarefas.children;
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].classList.remove('selected');
  }
}

adicionaColor();
function adicionaColor() {
  let listaTarefas = document.querySelector('#lista-tarefas');
  listaTarefas.addEventListener('click', function (event) {
    removeColor();
    event.target.classList.add('selected');
  });
}

tarefaCompleta();
function tarefaCompleta() {
  let listaTarefas = document.querySelector('#lista-tarefas');
  listaTarefas.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

apagaTudo();
function apagaTudo() {
  let apagaButton = document.getElementById('apaga-tudo');
  apagaButton.addEventListener('click', function () {
    let listaTarefas = document.getElementById('lista-tarefas');
    listaTarefas.innerText = '';
  });
}

removeCompletos();
function removeCompletos() {
  let removeButton = document.getElementById('remover-finalizados');
  let listaTarefas = document.getElementById('lista-tarefas');
  removeButton.addEventListener('click', function () {
    let tarefas = document.querySelectorAll('.completed');
    for (let i = 0; i < tarefas.length; i += 1) {
      let tarefasCompletas = tarefas[i];
      listaTarefas.removeChild(tarefasCompletas);
    }
  });
}
