function addTaskButton() {

  let button = document.getElementById('criar-tarefa');
  let input = document.querySelector('#texto-tarefa');
  let listContainer = document.getElementById('lista-tarefas');

  button.addEventListener('click', function () {

    console.log('entrou');

    let listItem = document.createElement('li');

    listItem.innerHTML = input.value;
    listContainer.appendChild(listItem);
    input.value = '';

  });

}
addTaskButton();
