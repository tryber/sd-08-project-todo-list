function adicionarTarefa() {
  const item = document.createElement('li');
  const lista = document.querySelector('#lista-tarefas');
  const texto = document.querySelector('#texto-tarefa');
  item.innerHTML = texto.value;
  lista.appendChild(item);
  texto.value = '';
}

const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', adicionarTarefa);

function tarefaSelecionada(e) {
  const item = document.querySelectorAll('li');
  if (e.target.classList.contains('selecionado')) {
    e.target.classList.remove('selecionado');
  } else {
    for (let check = 0; check < item.length; check += 1) {
      item[check].classList.remove('selecionado');
    }
    e.target.classList.add('selecionado');
  }
}

const lista = document.querySelector('#lista-tarefas');
lista.addEventListener('click', tarefaSelecionada);

function tarefasCompletas(e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.className += ' completed';
  }
}

lista.addEventListener('dblclick', tarefasCompletas);

function apagaTarefas() {
  const item = document.querySelectorAll('li');
  for (let i = 0; i < item.length; i += 1) {
    lista.removeChild(item[i]);
  }
}

const apagador = document.querySelector('#apaga-tudo');
apagador.addEventListener('click', apagaTarefas);

function apagaCompletos() {
  const item = document.querySelectorAll('.completed');
  for (let i = 0; i < item.length; i += 1) {
    lista.removeChild(item[i]);
  }
}

const botaoCompletos = document.querySelector('#remover-finalizados');
botaoCompletos.addEventListener('click', apagaCompletos);
