const lista = document.querySelector('ol');
const botaoCriaTarefa = document.querySelector('#criar-tarefa');
const botaoApagaTudo = document.querySelector('#apaga-tudo');
const botaoRemoveFinalizados = document.querySelector('#remover-finalizados');
const listaDeTarefas = document.getElementsByTagName('li');

function removeBackgroundColor() {
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
      novaTarefaCriada.style.backgroundColor = 'rgb(128, 128, 128)';
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

function removeFinalizados() {
  const tarefasProntas = document.getElementsByClassName('completed');
  botaoRemoveFinalizados.addEventListener('click', () => {
    for (let index = 0; tarefasProntas.length > 0; index += 1) {
      lista.removeChild(tarefasProntas[index]);
    }
  });
}
removeFinalizados();
