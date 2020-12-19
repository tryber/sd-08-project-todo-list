const taskList = document.getElementById('lista-tarefas');
taskList.innerHTML = localStorage.getItem('List');

document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    const input = document.getElementById('texto-tarefa');
    const task = document.createElement('li');
    task.innerHTML = input.value;
    task.classList.add('task');
    input.value = '';
    taskList.appendChild(task);
  }

  if (event.target.classList.contains('task')) {
    const tasks = document.querySelector('.selected');
    if (tasks === null) {
      event.target.classList.add('selected');
    } else {
      tasks.removeAttribute('style');
      tasks.classList.remove('selected');
      event.target.classList.add('selected');
    }
  }

  if (event.target.id === 'apaga-tudo') {
    taskList.innerHTML = '';
  }

  if (event.target.id === 'remover-finalizados') {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(item => item.remove());
  }

  if (event.target.id === 'salvar-tarefas') {
    localStorage.setItem('List', taskList.innerHTML);
  }

  if (event.target.id === 'mover-cima') {
    const childNode = document.querySelectorAll('.task');
    let selected;
    childNode.forEach((item, index) => {
      if (item.classList.contains('selected')) {
        selected = index;
      }
    });
    if (selected > 0) {
      childNode[selected].parentElement.insertBefore(
        childNode[selected],
        childNode[selected - 1],
      );
      // Solução encontrada no site 'https://stackoverflow.com/questions/9732624/how-to-swap-dom-child-nodes-in-javascript'
    }
  }

  if (event.target.id === 'mover-baixo') {
    const childNode = document.querySelectorAll('.task');
    let selected;
    childNode.forEach((item, index) => {
      if (item.classList.contains('selected')) {
        selected = index + 1;
      }
    })
    if (selected < childNode.length) {
      childNode[selected].parentElement.insertBefore(
        childNode[selected],
        childNode[selected - 1],
      );
    }
  }

  if (event.target.id === 'remover-selecionado') {
    document.querySelector('.selected').remove();
  }
});

taskList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});
