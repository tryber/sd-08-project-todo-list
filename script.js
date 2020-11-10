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
});

//  Adicionar classe selected para a li selecionada;
const taskListArray = document.getElementsByClassName('element-list');

function selected () {
    for (let index = 0; index < taskListArray.length; index += 1) {
        taskListArray[index].addEventListener('click', function () {
        for (let i = 0; i < taskListArray.length; i += 1) {
        if (taskListArray[i].className.includes('selected')) {
            taskListArray[i].classList.remove('selected');
        }
        }
        taskListArray[index].classList.add('selected');
    });
    }
}
//  A função será executada toda vez que eu adicionar um elemento na lista;
addTaskButton.addEventListener('click', selected);