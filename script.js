function criaNovaTarefa() {
  const botaoCriaTarefa = document.querySelector('#criar-tarefa');
  const novaTarefa = document.getElementById('texto-tarefa');
  const lista = document.querySelector('ol');
  botaoCriaTarefa.addEventListener('click', () => {
    const novaTarefaCriada = document.createElement('li');
    novaTarefaCriada.innerHTML = novaTarefa.value;
    lista.appendChild(novaTarefaCriada);
    novaTarefa.value = '';
  });
}
criaNovaTarefa();

function mudaCorDaTarefa() {
    const tarefas = document.querySelectorAll('li');
}

