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