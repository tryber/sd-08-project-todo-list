function capturaEvento(elementoHTML, tipoEvento, acaoDoEvento) {
  const elementoPai = document.getElementById(elementoHTML);
  elementoPai.addEventListener(tipoEvento, (element) => acaoDoEvento(element.target));
}

function selectedItem(item) {
  const previousSelected = document.querySelector('.selected');
  if (previousSelected != null) {
    previousSelected.style.backgroundColor = '';
    previousSelected.classList.remove('selected');
  }
  item.style.backgroundColor = 'rgb(128, 128, 128)';
  item.classList.add('selected');
}

function tarefaConcluida(item) {
  item.classList.toggle('completed');
}

function preencheItem(item, li) {
  li.innerText = item;
  li.className = 'item';
  return li;
}

function criarItemLista(tarefa) {
  const li = document.createElement('li');
  const ol = document.getElementById('lista-tarefas');
  preencheItem(tarefa, li, ol);
  ol.appendChild(li);
}

function criarTarefa() {
  const input = document.getElementById('texto-tarefa');
  criarItemLista(input.value);
  input.value = '';
}

function apagaTudo() {
  const listaTarefa = document.getElementById('lista-tarefas');
  while (listaTarefa.firstChild) listaTarefa.removeChild(listaTarefa.firstChild);
}

function removerFinalizados() {
  const listaCompletados = document.querySelectorAll('.completed');
  listaCompletados.forEach((elemento, index) => {
    listaCompletados[index].parentNode.removeChild(elemento);
  });
}

capturaEvento('criar-tarefa', 'click', criarTarefa);
capturaEvento('apaga-tudo', 'click', apagaTudo);
capturaEvento('lista-tarefas', 'click', selectedItem);
capturaEvento('lista-tarefas', 'dblclick', tarefaConcluida);
capturaEvento('remover-finalizados', 'click', removerFinalizados);
