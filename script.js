let createTask = document.getElementById('criar-tarefa'); // elemento button
let inputText = document.getElementById('texto-tarefa'); // elemento input
let taskList = document.getElementById('lista-tarefas'); //elemento ol

createTask.addEventListener('click', ()=> {
  let newTask = document.createElement('li');
  newTask.innerHTML = inputText.value;
  taskList.appendChild(newTask);
  inputText.value = '';
})
