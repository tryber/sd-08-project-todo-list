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

function addTaskColor() {
  let lista = document.querySelector('#lista-tarefas');
  lista.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  });
}
addTaskColor();