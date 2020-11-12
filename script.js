const listaTarefa = document.getElementById('lista-tarefas');

function salvaStorage() {
  localStorage.setItem('lista-tarefas', listaTarefa.innerHTML);
}

function carregaStorage() {
  if (localStorage.getItem('lista-tarefas')) {
    const tarefasSalvas = localStorage.getItem('lista-tarefas');
    listaTarefa.innerHTML = tarefasSalvas;
  }
}

function capturaEvento(elementoHTML, tipoEvento, acaoDoEvento) {
  const elementoPai = document.getElementById(elementoHTML);
  elementoPai.addEventListener(tipoEvento, (element) => acaoDoEvento(element.target));
}

function itemSelecionado(item) {
  const preSelecionado = document.querySelector('.selected');
  if (preSelecionado != null) {
    preSelecionado.style.backgroundColor = '';
    preSelecionado.classList.remove('selected');
  }
  item.style.backgroundColor = 'rgb(128, 128, 128)';
  item.classList.add('selected');
  salvaStorage();
}

function tarefaConcluida(item) {
  item.classList.toggle('completed');
  salvaStorage();
}

function preencheItem(item, li) {
  li.innerText = item;
  li.className = 'item';
  return li;
}

function criarItemLista(tarefa) {
  const li = document.createElement('li');
  preencheItem(tarefa, li, listaTarefa);
  listaTarefa.appendChild(li);
}

function criarTarefa() {
  const input = document.getElementById('texto-tarefa');
  criarItemLista(input.value);
  input.value = '';
  salvaStorage();
}

function apagaTudo() {
  while (listaTarefa.firstChild) listaTarefa.removeChild(listaTarefa.firstChild);
  salvaStorage();
}

function removerFinalizados() {
  const listaCompletados = document.querySelectorAll('.completed');
  listaCompletados.forEach((elemento, index) => {
    listaCompletados[index].parentNode.removeChild(elemento);
  });
  salvaStorage();
}

function removeSelecionado() {
  const tarefaSelecionda = document.querySelector('.selected');
  (tarefaSelecionda.parentNode).removeChild(tarefaSelecionda);
  salvaStorage();
}

capturaEvento('criar-tarefa', 'click', criarTarefa);
capturaEvento('apaga-tudo', 'click', apagaTudo);
capturaEvento('lista-tarefas', 'click', itemSelecionado);
capturaEvento('lista-tarefas', 'dblclick', tarefaConcluida);
capturaEvento('remover-finalizados', 'click', removerFinalizados);
capturaEvento('remover-selecionado', 'click', removeSelecionado);
capturaEvento('salvar-tarefas', 'click', salvaStorage);

window.onload = () => {
  carregaStorage();
};
