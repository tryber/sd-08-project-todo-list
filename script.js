function criaNovaTarefa() {
  const botaoCriaTarefa = document.querySelector('#criar-tarefa');
  const lista = document.querySelector('ol');
  botaoCriaTarefa.addEventListener('click', () => {
    const novaTarefa = document.querySelector('input').value;
    const novaTarefaCriada = document.createElement('li');
    novaTarefaCriada.innerHTML = novaTarefa;
    lista.appendChild(novaTarefaCriada);
  });
}
criaNovaTarefa();

 
