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
function itemSelected(event) {
  let allTasks = document.querySelectorAll('.taskList');
  for (let index = 0; allTasks.length > index; index += 1) {
    let thisTask = allTasks[index];
    thisTask.classList.remove('selected');
  }
  event.target.classList.toggle('selected');

}
//função para adicionar ou remover classe 'completed'
function itemCompleted(event) {
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
});

//variáveis para os botões criados no html
let deleteButton = document.getElementById('apaga-tudo');
let deleteOkTasks = document.getElementById('remover-finalizados');
let deleteSelectedButton = document.getElementById('remover-selecionado')

//função para deletar todas as tarefas
function deleteTasks() {
  let tasks = document.querySelectorAll('li');
  for (let index = 0; tasks.length > index; index += 1) {
    let task = tasks[index];
    task.remove();
  }
}
deleteButton.addEventListener('click', deleteTasks); //evento para o botão de delete

//função para deletar todas as tarefas concluidas
function deleteCompletedTasks() {
  let tasks = document.querySelectorAll('.completed')
  for (let index = 0; tasks.length > index; index += 1) {
    let task = tasks[index];
    task.remove();
  }
}
deleteOkTasks.addEventListener('click', deleteCompletedTasks); //evento para o botão de delete

//função para deletar tarefas selecionadas
function deleteSelected() {
  let tasks = document.querySelectorAll('.selected');
  for (let index = 0; tasks.length > index; index += 1) {
    let task = tasks[index];
    task.remove();
  }
}
deleteSelectedButton.addEventListener('click', deleteSelected);

//Botões de direcionamento das atividades
let cimaBotao = document.querySelector('#mover-cima');
let baixoBotao = document.querySelector('#mover-baixo');

cimaBotao.addEventListener('click', function() {
  let task = document.querySelector('.selected');
  if (task && task.previousElementSibling) {
    let parent = task.parentNode;
    parent.insertBefore(task, task.previousElementSibling);
  }
});

baixoBotao.addEventListener('click', function() {
  let task = document.querySelector('.selected');
  if (task && task.nextElementSibling) {
    let parent = task.parentNode;
    parent.insertBefore(task.nextElementSibling, task);
  }
});

//botão para salvar tarefas

// let saveTask = document.querySelector('#salvar-tarefas');

// function savedTasks() {
//   let taskToSave = document.querySelectorAll('li');
//   let tasksArray = [];
//   for (let index of taskToSave) {
//     taskToSave[index].push = tasksArray;
//   }
//   localStorage.setItem("task", taskToSave);
// }



//pesquisas feitas em https://www.javascriptprogressivo.net/2018/07/Recebendo-Valor-Usuario-Formulario-Input-JavaScript.html , https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent, https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList, https://www.devmedia.com.br/alert-em-javascript/37208 , https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore, https://pt.stackoverflow.com/questions/329223/armazenar-um-array-de-objetos-em-um-local-storage-com-js