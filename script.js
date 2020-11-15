window.onload = function () {
  // Add conteudo na lista
  let texto = document.getElementById('texto-tarefa');
  let adicionaTarefa = document.getElementById('criar-tarefa');
  let lista = document.getElementById('lista-tarefas');

  adicionaTarefa.addEventListener('click', function () {
    let tarefa = document.createElement('li');
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
        taskList[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  });
  // Add a clase completed aos itens
  lista.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed') == false) {
      event.target.classList.add('completed');
    } else {
      event.target.classList.remove('completed');
    }
  })
  // Botão apaga tudo
  document.getElementById('apaga-tudo').addEventListener('click', function () {
    let item = document.querySelectorAll('.item-list')
    for (let index = 0; index < item.length; index += 1) {
      lista.removeChild(item[index]);
    }
    
  })
};

  



 


