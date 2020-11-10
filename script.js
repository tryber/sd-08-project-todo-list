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
adicionaTarefa();

function removeColor() {
  let listaTarefas = document.querySelector('#lista-tarefas');
  let tarefas = listaTarefas.children;
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].classList.remove('selected');
  }
}

function adicionaColor() {
  let listaTarefas = document.querySelector('#lista-tarefas');
  listaTarefas.addEventListener('click', function (event) {
    removeColor();
    event.target.classList.add('selected');
  });
}
adicionaColor();

function tarefaCompleta() {
  let tarefas = document.querySelectorAll('.tarefas');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].addEventListener('dblclick', function (event) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    });
  }
}
tarefaCompleta();

function apagaTudo() {
  let apagaButton = document.getElementById('apaga-tudo');
  apagaButton.addEventListener('click', function () {
    let listaTarefas = document.getElementById('lista-tarefas')
    listaTarefas.innerText = '';
  })
}
apagaTudo();
