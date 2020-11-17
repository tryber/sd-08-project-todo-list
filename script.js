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


function removesAll() {

  let button = document.querySelector('#apaga-tudo');

  button.addEventListener('click', function () {

    let allTasksList = document.querySelectorAll('li');

    for (let index = 0; index < allTasksList.length; index += 1) {

      let node = allTasksList[index];
      node.parentNode.removeChild(node);

    }

  });

}
removesAll();

function removesCompleted() {

  let button = document.querySelector('#remover-finalizados');

  button.addEventListener('click', function () {

    let completedTasksList = document.querySelectorAll('.completed');

    for (let index = 0; index < completedTasksList.length; index += 1) {
      let node = completedTasksList[index];
      node.parentNode.removeChild(node);
    }
  });
}
removesCompleted();
