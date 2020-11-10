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
  listaTarefas.addEventListener('click', function(event) {
    removeColor();
    event.target.classList.add('selected');
  });
}
adicionaColor();
