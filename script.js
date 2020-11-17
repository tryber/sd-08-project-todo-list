function adicionarTarefa() {
    let tarefa = document.querySelector('#texto-tarefa').value;
    let lista = document.querySelector('#lista-tarefas');
    let elemento = document.createElement('li');
    elemento.innerText = tarefa;
    lista.appendChild(elemento);
  }
  
  window.onload = function () {
  let botaoAdicionar = document.querySelector('#criar-tarefa');
  botaoAdicionar.addEventListener('click', adicionarTarefa);
  }