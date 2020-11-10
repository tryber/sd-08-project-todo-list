const addTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

//  Evento que adiciona itens do input na lista e limpa o texto do input;

addTaskButton.addEventListener('click', function () {
  const createLi = document.createElement('li');
  createLi.innerHTML = input.value;
  createLi.classList.add('element-list');
  taskList.appendChild(createLi);
  input.value = ''
  completed(createLi);
  selected(createLi)
});

//  Adicionar classe selected para a li selecionada;
const taskListArray = document.getElementsByClassName('element-list');

function selected (tasks) {
    tasks.addEventListener('click', function (event) {
        for (let i = 0; i < taskListArray.length; i += 1) {
            if (taskListArray[i].className.includes('selected')) {
              taskListArray[i].classList.remove('selected');
            }
          } 
      event.target.classList.toggle('selected')
    });   
  }


//  A função será executada toda vez que eu adicionar um elemento na lista;
//addTaskButton.addEventListener('click', selected);

//  Adicionar função que risca tarefas concluidas;

function completed (task) {
  task.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed')
  });   
}

//  Botão apaga tudo
let buttonClearAll = document.getElementById('apaga-tudo');

buttonClearAll.addEventListener('click', function () {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
})

//  Botão remover finalizados
const buttonClearCompleted = document.getElementById('remover-finalizados');

buttonClearCompleted.addEventListener('click', function () {
    const completeds = document.getElementsByClassName('completed')
   while (completeds) {
       completeds[0].parentNode.removeChild(completeds[0]);
   }
})

//Botão remover selecionado
const buttonClearSelected = document.getElementById('remover-selecionado');

buttonClearSelected.addEventListener('click', function () {
    const selected = document.getElementsByClassName('selected');
    selected[0].parentNode.removeChild(selected[0]);
})
