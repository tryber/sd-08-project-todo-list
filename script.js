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