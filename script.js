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
