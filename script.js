const buttonCreat  = document.getElementById('criar-tarefa');
buttonCreat.addEventListener('click', function() {
  let task = document.createElement('li');
  let taskText = document.getElementById('texto-tarefa');
  let text =document.createTextNode(taskText.value);
  taskText.value = "";
  task.appendChild(text);
  document.getElementById('lista-tarefas').appendChild(task)
});


const buttonRemove  = document.getElementById('apaga-tudo');
buttonRemove.addEventListener('click', function() {
  let task = document.getElementsByTagName('li');
  for(let i=0; i<task.length; i++){
    // let apaga = ;
    task[i].remove();
  }
});
