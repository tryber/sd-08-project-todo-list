const lista = document.querySelector('ol');
const botaoCriaTarefa = document.querySelector('#criar-tarefa');

function removeSelected() {
  const listaDeTarefas = document.getElementsByTagName('li');
  for (let index = 0; index < listaDeTarefas.length; index += 1) {
    listaDeTarefas[index].classList.remove('selected');
  }
}

function criaNovaTarefa() {
  const novaTarefa = document.getElementById('texto-tarefa')
  botaoCriaTarefa.addEventListener('click', () => {
    const novaTarefaCriada = document.createElement('li');
    novaTarefaCriada.addEventListener('click', () => {
      removeSelected();
      novaTarefaCriada.classList.add('selected');
      console.log(lista);
    });
    novaTarefaCriada.innerHTML = novaTarefa.value;
    lista.appendChild(novaTarefaCriada);
    novaTarefa.value = '';
  });
}
criaNovaTarefa();
