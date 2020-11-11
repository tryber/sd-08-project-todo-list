const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');

// Requisito 05
function adicionarLi() {
  if (input.value !== '') {
    const li = document.createElement('li');
    ol.appendChild(li);
    ol.children[ol.children.length - 1].innerText = input.value;
    input.value = '';
  }
}

button.addEventListener('click', adicionarLi);

// Requisito 07
function selectLi(event) {
  for (let i = 0; i < ol.children.length; i += 1) {
    ol.children[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

ol.addEventListener('click', selectLi);

// Requisito 09
function completed(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

ol.addEventListener('dblclick', completed);

// Requisito 10
const erase = document.querySelector('#apaga-tudo');

function eraseAll() {
  for (let i = ol.children.length; i > 0; i -= 1) {
    ol.removeChild(ol.children[i - 1]);
  }
}

erase.addEventListener('click', eraseAll);

// Requisito 11
const eraseCompleted = document.querySelector('#remover-finalizados');

function eraseAllCompleted() {
  for (let i = ol.children.length; i > 0; i -= 1) {
    if (ol.children[i - 1].classList.contains('completed')) {
      ol.removeChild(ol.children[i - 1]);
    }
  }
}

eraseCompleted.addEventListener('click', eraseAllCompleted);

// Requisito 12
const salvarTarefa = document.querySelector('#salvar-tarefas');

function storeTasks() {
  localStorage.clear();

  const oldList = [];
  const completedList = [];

  for (let i = 0; i < ol.children.length; i += 1) {
    oldList.push(ol.children[i].innerText);
    if (ol.children[i].classList.contains('completed')) {
      completedList.push(i);
    }
  }

  localStorage.setItem('lista', JSON.stringify(oldList));
  localStorage.setItem('completed', JSON.stringify(completedList));
}

salvarTarefa.addEventListener('click', storeTasks);

window.onload = function () {
  if (localStorage.length !== 0) {
    const cls = JSON.parse(localStorage.getItem('lista'));
    const com = JSON.parse(localStorage.getItem('completed'));

    for (let i = 0; i < cls.length; i += 1) {
      const li = document.createElement('li');
      ol.appendChild(li);
      ol.children[ol.children.length - 1].innerText = cls[i];
    }

    for (let i = 0; i < com.length; i += 1) {
      ol.children[com[i]].classList.add('completed');
    }
  }
};

// Requisito 13
const paraCima = document.querySelector('#mover-cima');
const paraBaixo = document.querySelector('#mover-baixo');

function posi() {
  let position;
  for (let i = 0; i < ol.children.length; i += 1) {
    if (ol.children[i].classList.contains('selected')) {
      position = i;
    }
  }
  return position;
}

function moveDown() {
  const position = posi();

  if (position === undefined) {
    return;
  }

  if (position + 1 === ol.children.length) {
    return;
  }

  const text1 = ol.children[position].innerText;
  const text2 = ol.children[position + 1].innerText;

  ol.children[position].innerText = text2;
  ol.children[position + 1].innerText = text1;

  ol.children[position].classList.remove('selected');
  ol.children[position + 1].classList.add('selected');

  if (ol.children[position].classList.contains('completed')) {
    ol.children[position].classList.remove('completed');
    ol.children[position + 1].classList.add('completed');
  }
}

paraBaixo.addEventListener('click', moveDown);

function moveUp() {
  const position = posi();

  if (position === undefined) {
    return;
  }

  if (position - 1 < 0) {
    return;
  }

  const text1 = ol.children[position].innerText;
  const text2 = ol.children[position - 1].innerText;

  ol.children[position].innerText = text2;
  ol.children[position - 1].innerText = text1;

  ol.children[position].classList.remove('selected');
  ol.children[position - 1].classList.add('selected');

  if (ol.children[position].classList.contains('completed')) {
    ol.children[position].classList.remove('completed');
    ol.children[position - 1].classList.add('completed');
  }
}

paraCima.addEventListener('click', moveUp);

// Requisito 13
const removeSelected = document.querySelector('#remover-selecionado');

function removeSelectedChild() {
  for (let i = 0; i < ol.children.length; i += 1) {
    if (ol.children[i].classList.contains('selected')) {
      ol.removeChild(ol.children[i]);
    }
  }
}

removeSelected.addEventListener('click', removeSelectedChild);
