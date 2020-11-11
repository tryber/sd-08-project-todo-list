const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');

function adicionarLi() {
  if (input.value !== '') {
    const li = document.createElement('li');
    ol.appendChild(li);
    ol.children[ol.children.length - 1].innerText = input.value;
    input.value = '';
  }
}

button.addEventListener('click', adicionarLi);

function selectLi(event) {
  for (let i = 0; i < ol.children.length; i += 1) {
    ol.children[i].classList.remove('selected');
    //ol.children[i].style.backgroundColor = 'white';
  }
  //event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.classList.add('selected');
}

ol.addEventListener('click', selectLi);

function completed(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

ol.addEventListener('dblclick', completed);

const erase = document.querySelector('#apaga-tudo');

function eraseAll() {
  for (let i = ol.children.length; i > 0; i -= 1) {
    ol.removeChild(ol.children[i - 1]);
  }
}

erase.addEventListener('click', eraseAll);

const eraseCompleted = document.querySelector('#remover-finalizados');

function eraseAllCompleted() {
  for (let i = ol.children.length; i > 0; i -= 1) {
    if (ol.children[i - 1].classList.contains('completed')) {
      ol.removeChild(ol.children[i - 1]);
    }
  }
}

eraseCompleted.addEventListener('click', eraseAllCompleted);

const salvarTarefa = document.querySelector('#salvar-tarefas');

function storeTasks() {
  localStorage.clear();

  let oldList = [];
  let completedList = [];

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
    let cls = JSON.parse(localStorage.getItem('lista'));
    let com = JSON.parse(localStorage.getItem('completed'));

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

const paraCima = document.querySelector('#mover-cima');
const paraBaixo = document.querySelector('#mover-baixo');

function moveDown() {
  let position;
  for (let i = 0; i < ol.children.length; i += 1) {
    if (ol.children[i].classList.contains('selected')) {
      position = i;
    }
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
  let position;
  for (let i = 0; i < ol.children.length; i += 1) {
    if (ol.children[i].classList.contains('selected')) {
      position = i;
    }
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
