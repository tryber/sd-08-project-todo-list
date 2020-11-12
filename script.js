window.onload = loadList;

// Requisito 05 - Deve haver um botão com id="criar-tarefa" e ao clicar nesse botão,
// um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
// Requisito 06 - Os itens da lista de tarefas devem ser ordenados por ordem de criação.

function addTask() {
  let textBox = document.querySelector('#texto-tarefa');
  let btntask = document.querySelector('#criar-tarefa');
  let lista = document.querySelector('#lista-tarefas');

  btntask.addEventListener('click', function(){
    let li = document.createElement('li');
    li.innerHTML = textBox.value;
    lista.appendChild(li);
    lista.nex
    textBox.value = '';
  });
}
addTask();

// Requisito 07 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).
function addTaskColor() {
  let lista = document.querySelector('#lista-tarefas');
  lista.addEventListener('click', function(event){
    // Requisito 08 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.
    for(let index = 0; index < lista.children.length; index += 1) {
      if(lista.children[index].className === 'selected') {
        lista.children[index].classList.remove('selected');
      }
    }
    event.target.className = 'selected';
  });
}
addTaskColor();

// Requisito 09 - Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo.
// Deve ser possível desfazer essa ação clicando novamente duas vezes no item.
function taskCompleted() {
  let lista = document.querySelector('#lista-tarefas');
  lista.addEventListener('dblclick', function(event) {
    if(event.target.className !== 'completed') {
      event.target.className = 'completed';
    } else {
      event.target.className = '';
    }
  });
}
taskCompleted();

// Requisito 10 - Deve haver um botão com id="apaga-tudo" que quando clicado deve apagar todos os items da lista.
function deleteList() {
  let btnApaga = document.querySelector('#apaga-tudo');
  btnApaga.addEventListener('click', function () {
    let lista = document.querySelector('#lista-tarefas');
    lista.innerHTML = '';
  });
}
deleteList();

// Requisito 11 - Deve haver um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista.
function deleteCompletedTasks() {
  let btnRemoveTasks = document.querySelector('#remover-finalizados');
  btnRemoveTasks.addEventListener('click', function() {
    let lista = document.querySelector('#lista-tarefas');
    for(let i = 0; i < lista.children.length; i += 1) {
      if(lista.children[i].className === 'completed') {
        lista.removeChild(lista.children[i]);
        i -= 1;
      }
    }
  });
}
deleteCompletedTasks();

// Requisito 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista.
// Se você fechar e reabrir a página, a lista deve continuar no estado em que estava.

function saveList() {
  btnSave = document.querySelector('#salvar-tarefas');
  btnSave.addEventListener('click', function() {
    clearListLocalStorage();
    let lista = document.querySelector('#lista-tarefas');
    for(let i = 1; i <  lista.children.length + 1; i += 1) {
      let key = "Item" + i;
      let value = lista.children[i-1].outerHTML;
      localStorage.setItem(key, value);
    }
  });
}
saveList();

function loadList() {
  let lista = document.querySelector('#lista-tarefas');
  let itemAdd = 'Item1';
  let indexAdd = 1;
  while(localStorage.getItem(itemAdd)) {
    let storage = localStorage.getItem(itemAdd);
    lista.innerHTML += storage;
    indexAdd += 1;
    itemAdd = 'Item' + indexAdd;
  }
}

function clearListLocalStorage() {
    let itemRemove = 'Item1';
    let indexRemove = 1;
    while(localStorage.getItem(itemRemove)) {
      localStorage.removeItem(itemRemove);
      indexRemove += 1;
      itemRemove = 'Item' + indexRemove;
    }
}

// Requisito 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo",
// que permitam mover o item selecionado para cima ou para baixo na lista de tarefas.
function moveUp() {
  let lista = document.querySelector('#lista-tarefas');
  let btnMoveUp = document.querySelector('#mover-cima');
  btnMoveUp.addEventListener('click', function() {
    let itemSelected = document.querySelectorAll('.selected');
    if(itemSelected[0].previousElementSibling !== null) {
      let previousItem = itemSelected[0].previousElementSibling.outerHTML;
      itemSelected[0].previousElementSibling.outerHTML = itemSelected[0].outerHTML;
      itemSelected[0].outerHTML = previousItem;
    }
  });
}
moveUp();

function moveDown() {
  let lista = document.querySelector('#lista-tarefas');
  let btnMoveDown = document.querySelector('#mover-baixo');
  btnMoveDown.addEventListener('click', function() {
    let itemSelected = document.querySelectorAll('.selected');
    if(itemSelected[0].nextElementSibling !== null) {
      let nextItem = itemSelected[0].nextElementSibling.outerHTML;
      itemSelected[0].nextElementSibling.outerHTML = itemSelected[0].outerHTML;
      itemSelected[0].outerHTML = nextItem;
    }
  });
}
moveDown();