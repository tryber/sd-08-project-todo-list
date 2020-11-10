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
    ol.children[i].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
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
    if (ol.children[i -1].classList.contains('completed')) {
      ol.removeChild(ol.children[i - 1]);
    }
  }
}

eraseCompleted.addEventListener('click', eraseAllCompleted);
