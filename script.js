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
    document.getElementsByClassName('completed')[0].outerHTML = '';
  }
}

btnApagaCompleted.addEventListener('click', apagarCompleted);

function moverBaixo() {
  if (document.getElementsByClassName('selecionado')[0] !== listaTarefas.lastElementChild) {
    if (document.getElementsByClassName('selecionado')[0] !== undefined) {
      const itemSelecionado = document.getElementsByClassName('selecionado')[0];
      for (let index = 0; index < listaTarefas.children.length; index += 1) {
        if (listaTarefas.children[index].innerText === itemSelecionado.innerText) {
          const proximoItem = listaTarefas.children[index].nextElementSibling;
          const proximoItemTexto = proximoItem.innerText;
          const proximoItemClasse = proximoItem.className;
          const itemSelecTexto = itemSelecionado.innerText;
          const itemSelecClasse = itemSelecionado.className;
          itemSelecionado.innerText = proximoItemTexto;
          itemSelecionado.className = proximoItemClasse;
          proximoItem.innerText = itemSelecTexto;
          proximoItem.className = itemSelecClasse;
        }
      }
    }
  }
}

btnMoverBaixo.addEventListener('click', moverBaixo);

function moverCima() {
  if (document.getElementsByClassName('selecionado')[0] !== listaTarefas.firstElementChild) {
    if (document.getElementsByClassName('selecionado')[0] !== undefined) {
      const itemSelecionado = document.getElementsByClassName('selecionado')[0];
      for (let index = 0; index < listaTarefas.children.length; index += 1) {
        if (listaTarefas.children[index].innerText === itemSelecionado.innerText) {
          const anteriorItem = listaTarefas.children[index].previousElementSibling;
          const anteriorItemTexto = anteriorItem.innerText;
          const anteriorItemClasse = anteriorItem.className;
          const itemSelecTexto = itemSelecionado.innerText;
          const itemSelecClasse = itemSelecionado.className;
          itemSelecionado.innerText = anteriorItemTexto;
          itemSelecionado.className = anteriorItemClasse;
          anteriorItem.innerText = itemSelecTexto;
          anteriorItem.className = itemSelecClasse;
        }
      }
    }
  }
}

btnMoverCima.addEventListener('click', moverCima);

function apagarSelecionado() {
  const tamanhoLista = document.getElementsByClassName('selecionado').length;
  for (let index = 0; index < tamanhoLista; index += 1) {
    document.getElementsByClassName('selecionado')[0].outerHTML = '';
  }
}

btnApagarSelecionado.addEventListener('click', apagarSelecionado);

function geradorValor() {
  localStorage.clear();
  const elemento = document.getElementById('lista-tarefas').children;
  for (let index = 0; index < elemento.length; index += 1) {
    const valorElemento = '"' + elemento[index].innerText + '"' + ' ' + elemento[index].classList.value;
    localStorage.setItem(index, valorElemento);
  }
}

function geradorElemento() {
  if (localStorage.length > 0) {
    for (let index = 0; index < localStorage.length; index += 1) {
    const  info = localStorage.getItem(index);
    const listaValorClasse = info.split('"');
    const tarefaLi = document.createElement('li');
    tarefaLi.innerText = listaValorClasse[1];
    const listaClasses = listaValorClasse[2];
    for (let indexClasses = 1; indexClasses < listaClasses.length; indexClasses += 1) {
      tarefaLi.classList.add(listaClasses.split(' ')[indexClasses]);
      tarefaLi.classList.remove('undefined');
    }
    listaTarefas.appendChild(tarefaLi);
    }
  }
}

window.onload = geradorElemento();
btnSalvarTarefas.addEventListener('click', geradorValor);
