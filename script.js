function createsTask() {

  let button = document.querySelector('#criar-tarefa');
  let input = document.querySelector('#texto-tarefa');
  let taskListContainer = document.querySelector('#lista-tarefas');

  button.addEventListener('click', function () {
    if (input.value == '') {
      alert('Digite uma tarefa');
    } else {
      let createdTask = document.createElement('li');

      createdTask.style.backgroundColor = 'white';
      createdTask.innerHTML = input.value;
      taskListContainer.appendChild(createdTask);
      input.value = '';


      /* PRA N DEIXAR ESSE ADDEVENTLISTENER AQUI DA PRA ADD UMA CLASSE .task A CADA TAREFA CRIADA E DEPOIS DAR UM QUERYSELECTORALL E ADICIONAR O ADDEVENTLISTENER EM OUTRA FUNÇÃO */
      createdTask.addEventListener('click', function (event) {
        let task = event.target;
        let allTasks = document.querySelectorAll('li');


        if (task.style.backgroundColor == 'white') {

          for (let index = 0; index < allTasks.length; index += 1) {
            allTasks[index].style.backgroundColor = 'white';
          }

          task.style.backgroundColor = 'rgb(128,128,128)';

        }
      });

      createdTask.addEventListener('dblclick', function (event) {

        console.log('dblclick');

        let task = event.target;

        if (task.className == 'completed') {
          task.className = '';
        } else {
          task.className = 'completed';
        }

      });

    }
  });

}
createsTask();

function selectTask() {

  let tasks = document.querySelectorAll('li');

  for (let index = 0; index < tasks.length; index += 1) {
    task = tasks[index];

    task.addEventListener('click', function (event) {


    });

  }

}



