window.onload = function () {
  // Add conteudo na lista
  const texto = document.getElementById('texto-tarefa');
  let adicionaTarefa = document.getElementById('criar-tarefa');
  let lista = document.getElementById('lista-tarefas');

  adicionaTarefa.addEventListener('click', function () {
    let tarefa = document.createElement('li');
    tarefa.innerText = texto.value;
    lista.appendChild(tarefa);
    texto.value = '';
  });
};
