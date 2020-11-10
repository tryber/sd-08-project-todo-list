window.onload = function() {

  }
  //função para criação de todas as tasks
function createTask(content) {
  let task = document.createElement('li');
  task.className = 'taskList';
  task.textContent = content;
  task.addEventListener('click', itemSelected); //adicionar ou remover classe 'selected'
  task.addEventListener('dblclick', itemCompleted); //adicionar ou remover a classe 'completed'
  return task;
}

//implementação da função para adicionar e remover classe 'selected'
function itemSelected() {
  let allTasks = document.querySelectorAll('.taskList');
  for (let index = 0; allTasks.length > index; index += 1) {
    let thisTask = allTasks[index];
    thisTask.classList.remove('selected');
  }
  event.target.classList.toggle('selected');

}
//função para adicionar ou remover classe 'completed'
function itemCompleted() {
  event.target.classList.toggle('completed');
}

let taskButton = document.getElementById('criar-tarefa');
let taskList = document.getElementById('lista-tarefas');
let inputText = document.getElementById('texto-tarefa');

//criar item
taskButton.addEventListener('click', function() {
  if (inputText.value !== '') {
    let taskText = inputText.value;
    let task = createTask(taskText);
    taskList.appendChild(task);
    inputText.value = '';
  } else {
    alert("Desculpe, você precisa digitar uma tarefa!")
  }
})


//pesquisas feitas em https://www.javascriptprogressivo.net/2018/07/Recebendo-Valor-Usuario-Formulario-Input-JavaScript.html , https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent e https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList