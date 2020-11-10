const taskList = document.getElementById('lista-tarefas');
taskList.innerHTML = localStorage.getItem('List');

// Eventos click
document.addEventListener('click', (event) => {
  // Adicionar tarefa à lista
  if (event.target.id === 'criar-tarefa') {
    const input = document.getElementById('texto-tarefa');
    const task = document.createElement('li');
    task.innerHTML = input.value;
    task.classList.add('task');
    input.value = '';
    taskList.appendChild(task);
  }
  // Pinta a tarefa clicada
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
  // Apaga todas as tarefas
  if (event.target.id === 'apaga-tudo') {
    taskList.innerHTML = '';
  }
  // Apaga tarefas completas
  if (event.target.id === 'remover-finalizados') {
    const completedTasks = document.getElementsByClassName('completed');
    const length = completedTasks.length;
    for (let index = 0; index < length; index += 1) {
      completedTasks[0].parentElement.removeChild(completedTasks[0]);
    }
  }
  // Salva a lista de tarefas
  if (event.target.id === 'salvar-tarefas') {
    localStorage.setItem('List', taskList.innerHTML);
  }
  // Mover para cima o item selecionado
  if (event.target.id === 'mover-cima') {
    const childNode = document.querySelectorAll('.task');
    let selected;
    for (let index = 0; index < childNode.length; index += 1) {
      if (childNode[index].classList.contains('selected')) {
        selected = index;
      }
    }
    if (selected > 0) {
      childNode[selected].parentElement.insertBefore(
        childNode[selected],
        childNode[selected - 1],
      );
      // Solução encontrada no site 'https://stackoverflow.com/questions/9732624/how-to-swap-dom-child-nodes-in-javascript'
    }
  }
  // Mover para baixo o item selecionado
  if (event.target.id === 'mover-baixo') {
    const childNode = document.querySelectorAll('.task');
    let selected;
    for (let index = 0; index < childNode.length; index += 1) {
      if (childNode[index].classList.contains('selected')) {
        selected = index + 1;
      }
    }
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

// Eventos dblclick
// Torna a tarefa completa
taskList.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});
