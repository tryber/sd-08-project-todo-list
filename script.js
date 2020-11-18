const lista = document.querySelector('ol');
const botaoCriaTarefa = document.querySelector('#criar-tarefa');
const botaoApagaTudo = document.querySelector('#apaga-tudo');

function removeBackgroundColor() {
  const listaDeTarefas = document.getElementsByTagName('li');
  for (let index = 0; index < listaDeTarefas.length; index += 1) {
    listaDeTarefas[index].style.backgroundColor = '';
  }
}

function criaNovaTarefa() {
  const novaTarefa = document.getElementById('texto-tarefa');
  botaoCriaTarefa.addEventListener('click', () => {
    const novaTarefaCriada = document.createElement('li');
    novaTarefaCriada.addEventListener('click', () => {
      removeBackgroundColor();
      novaTarefaCriada.style.backgroundColor = 'rgb(128, 128, 128)'
    });
    novaTarefaCriada.addEventListener('dblclick', () => {
      novaTarefaCriada.classList.toggle('completed');
    });
    novaTarefaCriada.innerHTML = novaTarefa.value;
    lista.appendChild(novaTarefaCriada);
    novaTarefa.value = '';
  });
}
criaNovaTarefa();

function apagaLista() {
  botaoApagaTudo.addEventListener('click', () => {
    lista.innerHTML = '';
  });
}
apagaLista();
