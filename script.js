window.onload = function () {
  // Add conteudo na lista
  const texto = document.getElementById('texto-tarefa');
  const adicionaTarefa = document.getElementById('criar-tarefa');
  const lista = document.getElementById('lista-tarefas');

  adicionaTarefa.addEventListener('click', function () {
    const tarefa = document.createElement('li');
    tarefa.classList.add('item-list');
    tarefa.innerText = texto.value;
    lista.appendChild(tarefa);
    texto.value = '';
  });
  // Muda background dos itens da lista
  let taskList = document.getElementsByClassName('item-list')
  lista.addEventListener('click', function (event) {
    for (let index = 0; index < taskList.length; index += 1) {
      if (taskList[index].classList.contains('selected') == true) {
        taskList[index].className = 'item-list';
      }
      event.target.classList.add('selected');
    }
  })
}

  



 


