let createButton = document.getElementById('criar-tarefa');
let listCreate = document.getElementById('lista-tarefas');
let textCreate = document.getElementById('texto-tarefa');
let span = document.getElementsByTagName('span');
let buttonClear = document.querySelector('apaga-tudo');



createButton.addEventListener('click', function () {
    let listItem = textCreate.value;
    let item = document.createElement('li');
    item.innerText = listItem;
    item.className = 'work';
    if (listItem === '') {
      span.innerText = 'Caixa em branco, por favor digite um texto';
    } else {
      listCreate.appendChild(item);
      textCreate.value = '';
    }
  });
  
  listCreate.addEventListener('click', function (e) {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    e.target.className += ' selected';
  });
  
  listCreate.addEventListener('dblclick', function (e){
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.className += ' completed';
    }
  });
  buttonClear.addEventListener('click',  clear );
    function clear (){
      listItem = '';
    }
  