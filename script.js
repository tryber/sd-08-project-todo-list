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
  let taskList = document.getElementsByClassName('item-list');
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
  // Remove tarefas finalizadas
  document.getElementById('remover-finalizados').addEventListener('click', function () {
    let item = document.querySelectorAll('.item-list');
    for (let index = 0; index < item.length; index += 1) {
      if (item[index].classList.contains('completed')) {
        lista.removeChild(item[index]);
      }
    }
  })
  // Remove selecionado
  document.getElementById('remover-selecionado').addEventListener('click', function () {
    let item = document.querySelectorAll('.item-list');
    for (let index = 0; index < item.length; index += 1) {
      if (item[index].classList.contains('selected')) {
        lista.removeChild(item[index]);
      }
    }
  })
  // Salva tarefas
  
  document.getElementById('salvar-tarefas').addEventListener('click', function () {
    localStorage.clear();
    tarefasArray = []
    let getItemList = document.querySelectorAll('.item-list');
    for (let index = 0; index < getItemList.length; index += 1) {
      let itemTarefaLista = {
        item: getItemList[index].innerText,
        class: getItemList[index].className
      }
      tarefasArray.push(itemTarefaLista)
    }
    localStorage.setItem('tarefa', JSON.stringify(tarefasArray));
  })
  // Recupera tarefas após atualizar a aba ou abrir outra
  // let tarefaSalva = JSON.parse(localStorage.getItem('tarefa'));
  // for (let index = 0; index < tarefaSalva.length; index += 1){
  //   let tarefa = document.createElement('li');
  //   tarefa.className = tarefaSalva[index].class;
  //   tarefa.innerText = tarefaSalva[index].item;
  //   lista.appendChild(tarefa);
  // }
  // Mover tarefas
};

  



 


