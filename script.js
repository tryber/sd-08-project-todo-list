window.onload = function () {
  // Add conteudo na lista
  const texto = document.getElementById('texto-tarefa');
  const adicionaTarefa = document.getElementById('criar-tarefa');
  const lista = document.getElementById('lista-tarefas');

  adicionaTarefa.addEventListener('click', function () {
    const tarefa = document.createElement('li');
    tarefa.innerText = texto.value;
    lista.appendChild(tarefa);
    texto.value = '';
  });
}
