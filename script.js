const button  = document.getElementById('criar-tarefa');
button.addEventListener('click', function() {
  let task = document.createElement('li');
  let taskText = document.getElementById('texto-tarefa');
  let text =document.createTextNode(taskText.value);
  console.log(taskText)
  console.log(taskText.value);
  console.log(text);
  task.appendChild(text);
  document.getElementById('lista-tarefas').appendChild(task)
});
