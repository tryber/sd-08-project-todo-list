const listaTarefas = document.querySelector('#lista-tarefas');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const btnApagarTarefas = document.querySelector('#apaga-tudo');
const btnRemoverFinalizados = document.querySelector('#remover-finalizados');

btnCriarTarefa.addEventListener('click', adicionarTarefa);
btnApagarTarefas.addEventListener('click', apagarTarefas);
btnRemoverFinalizados.addEventListener('click', removerFinalizados);

function adicionarTarefa() {
  const input = document.querySelector('#texto-tarefa');
  const text = input.value;
  input.value = '';
  const textNode = document.createTextNode(text);
  const li = document.createElement('li');
  li.appendChild(textNode);
  li.addEventListener('click', selecionarTarefa);
  li.addEventListener('dblclick', completarTarefa);

  listaTarefas.appendChild(li);
}

function apagarTarefas() {
  listaTarefas.innerHTML = '';
}

function removerFinalizados() {
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    if (listaTarefas.children[index].classList.contains('completed')) {
      listaTarefas.removeChild(listaTarefas.children[index]);
    }
  }
}

function selecionarTarefa(event) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }

  const tarefaSelecionada = event.target;
  tarefaSelecionada.classList.add('selected');
}

function completarTarefa(event) {
  const tarefa = event.target;
  
  if (tarefa.classList.contains('completed')) {
    tarefa.classList.remove('completed');
  } else {
    tarefa.classList.add('completed');
  }
}
