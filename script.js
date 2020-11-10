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
    textBox.value = '';
  });
}
addTask();

// Requisito 07 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).
function addTaskColor() {
  let lista = document.querySelector('#lista-tarefas');
  lista.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'rgb(128,128,128)';
    // Requisito 08 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.
    for(let i = 0; i < lista.children.length; i += 1) {
      if(event.target !== lista.children[i]) {
        lista.children[i].style.backgroundColor = 'white';
      }
    }
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
    // let indice = lista.children.length;
    // for(let i = 0; i < indice; i += 1) {
    //   lista.removeChild(lista.lastElementChild);
    // }
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