function limpaCampoInput() {
  const inputCampo = document.querySelector('#texto-tarefa');
  inputCampo.value = '';
}

function removerCorElementoLista() {
  const lista = document.querySelectorAll('.elemento-lista');
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].classList.contains('colore-elemento-lista')) {
      lista[index].classList.remove('colore-elemento-lista');
    }
  }
}

function trocaCorElementoLista(elemento) {
  removerCorElementoLista();
  elemento.target.classList.add('colore-elemento-lista');
}

function verificaCliqueLista() {
  const lista = document.querySelectorAll('.elemento-lista');
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].addEventListener('click', trocaCorElementoLista);
  }
}

function verificaDoubleClickLista() {
  const lista = document.querySelectorAll('.elemento-lista');
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].addEventListener('dblclick', riscaElementoLista);
  }
}

function adicionaTarefaLista() {
  const tarefaInput = document.querySelector('#texto-tarefa').value;
  limpaCampoInput();
  const listaOrdenada = document.querySelector('#lista-tarefas');
  const elementoLista = document.createElement('li');
  elementoLista.className = 'elemento-lista';
  elementoLista.innerText = tarefaInput;
  listaOrdenada.appendChild(elementoLista);
  verificaDoubleClickLista();
  verificaCliqueLista();
}

function riscaElementoLista(elemento) {
  if (elemento.target.classList.contains('completed')) {
    elemento.target.classList.remove('completed');
  } else {
    elemento.target.classList.add('completed');
  }
}

function limparLista() {
  const lista = document.querySelectorAll('.elemento-lista');
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].remove();
  }
}

function limparFinalizados() {
  const lista = document.querySelectorAll('.elemento-lista');
  for (let index = 0; index < lista.length; index++) {
    if (lista[index].classList.contains('completed')) {
      lista[index].remove();
    }
  }
}

function salvarLista() {
  const listaOrdenada = document.querySelector('#lista-tarefas');
  const conteudoLista = listaOrdenada.innerHTML;
  localStorage.setItem('conteudoLista', conteudoLista);
}

function carregarLocalStorage() {
  if (localStorage.length === 0) {
  } else {
    const listaOrdenada = document.querySelector('#lista-tarefas');
    listaOrdenada.innerHTML = localStorage.conteudoLista;
  }
  verificaDoubleClickLista();
}

function moverParaCima() {
  const elementoSelecionado = document.querySelector('.colore-elemento-lista');
  if (elementoSelecionado === null) {
    return;
  }
  const pai = elementoSelecionado.parentNode;
  const anterior = elementoSelecionado.previousSibling;
  if (anterior !== null) {
    pai.insertBefore(elementoSelecionado, anterior);
  }
}

function moverParaBaixo() {
  const elementoSelecionado = document.querySelector('.colore-elemento-lista');
  if (elementoSelecionado === null) {
    return;
  }
  const pai = elementoSelecionado.parentNode;
  const proximo = elementoSelecionado.nextSibling;
  if (proximo === null) {
    return;
  }
  pai.insertBefore(proximo, elementoSelecionado);
}

function removerSelecionado() {
  const elementoSelecionado = document.querySelector('.colore-elemento-lista');
  if (elementoSelecionado === null) {
    return;
  }
  elementoSelecionado.remove();
}

window.onload = function () {
  const botaoAdicionar = document.querySelector('#criar-tarefa');
  const botaoLimparLista = document.querySelector('#apaga-tudo');
  const botaoRemoverFinalizados = document.querySelector(
    '#remover-finalizados',
  );
  const botaoSalvarLista = document.querySelector('#salvar-tarefas');
  const botaoMoverCima = document.querySelector('#mover-cima');
  const botaoMoverBaixo = document.querySelector('#mover-baixo');
  const botaoRemoverSelecionado = document.querySelector(
    '#remover-selecionado',
  );

  carregarLocalStorage();
  botaoAdicionar.addEventListener('click', adicionaTarefaLista);
  botaoLimparLista.addEventListener('click', limparLista);
  botaoRemoverFinalizados.addEventListener('click', limparFinalizados);
  verificaCliqueLista();
  botaoSalvarLista.addEventListener('click', salvarLista);
  botaoMoverCima.addEventListener('click', moverParaCima);
  botaoMoverBaixo.addEventListener('click', moverParaBaixo);
  botaoRemoverSelecionado.addEventListener('click', removerSelecionado);
};
