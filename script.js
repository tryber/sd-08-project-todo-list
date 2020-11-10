const btnCriarTarefa = document.getElementById('criar-tarefa');
const tarefaTexto = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');

const btnApagar = document.getElementById('remover-selecionado');
btnApagar.disabled = true;
btnApagar.addEventListener('click', function () {
  const selected = document.querySelector('.selected');
  selected.parentNode.removeChild(selected);
  btnApagar.disabled = true;
});

function clearSelection() {
  for (let i = 0; i < listaTarefa.children.length; i += 1) {
    listaTarefa.children[i].classList.remove('selected');
  }
  // btnUpArrow.disabled = true;
  // btnDownArrow.disabled = true;
  btnApagar.disabled = true;
}
function adicionarTarefa(tarefaTextoDigitado) {
  const tarefaItem = document.createElement('li');
  tarefaItem.innerHTML = tarefaTextoDigitado;
  listaTarefa.appendChild(tarefaItem);
  tarefaItem.addEventListener('click', function (e) {
    clearSelection();
    btnApagar.disabled = false;
    e.target.classList.add('selected');
    // if (e.target.previousSibling != null) {
    //   btnUpArrow.disabled = false;
    // }
    // if (e.target.nextSibling != null) {
    //   btnDownArrow.disabled = false;
    // }
  });
  tarefaItem.addEventListener('dblclick', function (e) {
    const classes = e.target.classList;
    clearSelection();
    if (classes.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  });
}

if (localStorage.getItem('tarefas') != null) {
  const listaLocal = localStorage.getItem('tarefas').split(',');
  const listaCompleted = localStorage.getItem('completos').split(',');

  if (localStorage.getItem('tarefas') !== '') {
    for (let index = 0; index < listaLocal.length; index += 1) {
      adicionarTarefa(listaLocal[index]);
      if (listaCompleted.includes(listaLocal[index])) {
        listaTarefa.lastElementChild.classList.add('completed');
      }
    }
  }
}

btnCriarTarefa.addEventListener('click', function () {
  const tarefa = tarefaTexto.value;
  tarefaTexto.value = '';
  adicionarTarefa(tarefa);
});

const btnLimparLista = document.getElementById('apaga-tudo');

function limparLista() {
  const size = listaTarefa.children.length;
  for (let index = 0; index < size; index += 1) {
    listaTarefa.removeChild(listaTarefa.firstElementChild);
  }
}

btnLimparLista.addEventListener('click', limparLista);

const btnLimparCompletos = document.getElementById('remover-finalizados');

function removerFinalizados() {
  const finalizados = document.getElementsByClassName('completed');
  const size = finalizados.length;
  for (let index = 0; index < size; index += 1) {
    listaTarefa.removeChild(finalizados[0]);
  }
}

btnLimparCompletos.addEventListener('click', removerFinalizados);

const btnSalvar = document.getElementById('salvar-tarefas');
function getData() {
  const tarefasData = [];
  const completedData = [];
  for (let i = 0; i < listaTarefa.children.length; i += 1) {
    const tarefa = listaTarefa.children[i];
    tarefasData.push(tarefa.innerHTML);
    if (tarefa.classList.contains('completed')) {
      completedData.push(tarefa.innerHTML);
    }
  }
  return { tarefas: tarefasData, completos: completedData };
}
btnSalvar.addEventListener('click', function () {
  const data = getData();
  for (let i = 0; i < Object.keys(data).length; i += 1) {
    const key = Object.keys(data)[i];
    localStorage.setItem(key, data[key]);
  }
});

const btnUpArrow = document.getElementById('mover-cima');
const btnDownArrow = document.getElementById('mover-baixo');

btnUpArrow.addEventListener('click', function () {
  const selected = document.querySelector('.selected');
  if (selected != null && selected.previousSibling != null) {
    const prev = document
      .getElementById('lista-tarefas')
      .replaceChild(selected, selected.previousSibling);
    document
      .getElementById('lista-tarefas')
      .insertBefore(prev, selected.nextSibling);
    // if (selected.previousSibling == null) {
    //   btnUpArrow.disabled = true;
    // }
  }
});

btnDownArrow.addEventListener('click', function () {
  const selected = document.querySelector('.selected');
  if (selected != null && selected.nextElementSibling != null) {
    const post = document
      .getElementById('lista-tarefas')
      .replaceChild(selected, selected.nextSibling);
    document.getElementById('lista-tarefas').insertBefore(post, selected);
    // if (selected.nextSibling == null) {
    //   btnDownArrow.disabled = true;
    // }
  }
});

// btnUpArrow.disabled = true;
// btnDownArrow.disabled = true;
