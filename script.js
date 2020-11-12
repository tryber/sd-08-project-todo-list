const receberTarefa = document.getElementById('texto-tarefa');
const btnCriar = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const tarefaAlvo = document.getElementById('lista-tarefas');
const btnApagaLista = document.getElementById('apaga-tudo');
const btnApagaCompleted = document.getElementById('remover-finalizados');
const btnSalvarTarefas = document.getElementById('salvar-tarefas');
const btnMoverBaixo = document.getElementById('mover-baixo');
const btnMoverCima = document.getElementById('mover-cima');
const btnApagarSelecionado = document.getElementById('remover-selecionado');


function criarItemLista() {
  if (receberTarefa.value.length > 0) {
    const tarefaLi = document.createElement('li');
    tarefaLi.innerText = receberTarefa.value;
    tarefaLi.className = 'tarefa';
    listaTarefas.appendChild(tarefaLi);
    receberTarefa.value = '';
  } else {
    alert('Nenhuma tarefa foi definida.');
  }
}

btnCriar.addEventListener('click', criarItemLista);

function classeSelecionado(evt) {
  if (evt.target.className.includes('tarefa')) {
    if (document.querySelector('.selecionado') !== null) {
      document.querySelector('.selecionado').classList.remove('selecionado');
      evt.target.classList.add('selecionado');
    } else {
      evt.target.classList.add('selecionado');
    }
  }
}

tarefaAlvo.addEventListener('click', classeSelecionado);

function classeCompleted(evt) {
  if (evt.target.className.includes('tarefa')) {
    if (evt.target.className.includes('completed') === false) {
      evt.target.classList.add('completed');
    } else {
      evt.target.classList.remove('completed');
    }
  }
}

tarefaAlvo.addEventListener('dblclick', classeCompleted);

function apagarLista() {
  const tamanhoLista = document.getElementsByTagName('ol')[0].children.length;
  for (let index = 0; index < tamanhoLista; index += 1) {
    document.getElementsByTagName('ol')[0].lastChild.remove();
  }
  localStorage.clear();
}

btnApagaLista.addEventListener('click', apagarLista);

function apagarCompleted() {
  const tamanhoLista = document.getElementsByClassName('completed').length;
  for (let index = 0; index < tamanhoLista; index += 1) {
    document.getElementsByClassName('completed')[0].outerHTML= '';
  }
}

btnApagaCompleted.addEventListener('click', apagarCompleted);

function salvarTarefas() {
  localStorage.clear();
  for (let index = 0; index < document.getElementsByClassName("tarefa").length; index += 1) {
    const valor = document.getElementsByClassName("tarefa")[index].innerText;
    localStorage.setItem(index, valor);
  }
}

btnSalvarTarefas.addEventListener('click', salvarTarefas);

function recuperarTarefas() {
  if (localStorage.length > 0) {
    for (let index = 0; index < localStorage.length; index += 1) {
        const tarefaLi = document.createElement('li');
        tarefaLi.innerText = localStorage.getItem(index);
        tarefaLi.className = 'tarefa';
        listaTarefas.appendChild(tarefaLi);
    }
  }
}

window.onload = recuperarTarefas();

function moverBaixo() {
  const itemSelecionado = document.getElementsByClassName('selecionado')[0];
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    if(listaTarefas.children[index].innerText === itemSelecionado.innerText) {
      const proximoItem = listaTarefas.children[index].nextElementSibling;
      const proximoItemTexto = proximoItem.innerText;
      const itemSelecTexto = itemSelecionado.innerText;

      itemSelecionado.innerText = proximoItemTexto;
      proximoItem.innerText = itemSelecTexto;
      document.querySelector('.selecionado').classList.remove('selecionado');
      proximoItem.classList.add('selecionado');
    }
  }
}

btnMoverBaixo.addEventListener('click', moverBaixo);

function moverCima() {
  const itemSelecionado = document.getElementsByClassName('selecionado')[0];
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    if(listaTarefas.children[index].innerText === itemSelecionado.innerText) {
      const anteriorItem = listaTarefas.children[index].previousElementSibling;
      const anteriorItemTexto = anteriorItem.innerText;
      const itemSelecTexto = itemSelecionado.innerText;

      itemSelecionado.innerText = anteriorItemTexto;
      anteriorItem.innerText = itemSelecTexto;
      document.querySelector('.selecionado').classList.remove('selecionado');
      anteriorItem.classList.add('selecionado');
    }
  }
}

btnMoverCima.addEventListener('click', moverCima);

function apagarSelecionado() {
  const tamanhoLista = document.getElementsByClassName('selecionado').length;
  for (let index = 0; index < tamanhoLista; index += 1) {
    document.getElementsByClassName('selecionado')[0].outerHTML= '';
  }
}

btnApagarSelecionado.addEventListener('click', apagarSelecionado);
