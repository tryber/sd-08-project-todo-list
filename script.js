function limpaCampoInput() {
  const inputCampo = document.querySelector('#texto-tarefa');
  inputCampo.value = '';
}

function adicionaTarefaLista() {
  const tarefaInput = document.querySelector('#texto-tarefa').value;
  limpaCampoInput();
  const listaOrdenada = document.querySelector('#lista-tarefas');
  const elementoLista = document.createElement('li');
  elementoLista.innerText = tarefaInput;
  listaOrdenada.appendChild(elementoLista);
}

window.onload = function () {
  const botaoAdicionar = document.querySelector('#criar-tarefa');
  botaoAdicionar.addEventListener('click', adicionaTarefaLista);
};
