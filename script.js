let createTask = document.getElementById('criar-tarefa'); //elemento button criador de tarefas
let clearAll = document.getElementById('apaga-tudo'); //elemento button para apagar todas as tarefas
let removeTask = document.getElementById('remover-finalizados'); //elemento button que remove tarefas completas
let inputText = document.getElementById('texto-tarefa'); //elemento input
let taskList = document.getElementById('lista-tarefas'); //elemento ol

createTask.addEventListener('click', ()=> {
  let newTask = document.createElement('li');
  newTask.innerHTML = inputText.value;
  taskList.appendChild(newTask);
  inputText.value = '';
  newTask.addEventListener('click', ()=> {
    let allTasks = document.getElementsByTagName('li');
    for (let index=0; index<allTasks.length; index++) {
      allTasks[index].classList.remove('oneClickselect');
    }
    newTask.classList.add('oneClickselect');
  })
  newTask.addEventListener('dblclick', ()=> {
    if (newTask.classList.contains('completed')) {
      newTask.classList.remove('completed');
    } else {
    newTask.classList.add('completed');
    }
  })
})






