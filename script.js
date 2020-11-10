window.onload = function() {

  }
  //função para criação de todas as tasks
function createTask(content) {
  let task = document.createElement('li');
  task.className = 'taskList';
  task.textContent = content;

  return task;
}


let taskButton = document.getElementById('criar-tarefa');
let taskList = document.getElementById('lista-tarefas');
let inputText = document.getElementById('texto-tarefa');

taskButton.addEventListener('click', function() {
  let taskText = inputText.value;
  let task = createTask(taskText);
  taskList.appendChild(task);
  inputText.value = '';
})






//pesquisas feitas em https://www.javascriptprogressivo.net/2018/07/Recebendo-Valor-Usuario-Formulario-Input-JavaScript.html , https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent