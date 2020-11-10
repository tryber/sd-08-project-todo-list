window.onload = function() {

}

let taskButton = document.getElementById('criar-tarefa');
let taskList = document.getElementById('lista-tarefas');
let inputText = document.getElementById('texto-tarefa');

taskButton.addEventListener('click', function() {
  let taskText = inputText.value;
  let task = document.createElement('li');
  task.className = 'task';
  taskList.appendChild(task);
  taskText.value = '';
})






//pesquisas feitas em https://www.javascriptprogressivo.net/2018/07/Recebendo-Valor-Usuario-Formulario-Input-JavaScript.html