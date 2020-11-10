function adicionaTarefa() {
  let botaoAdd = document.getElementById('criar-tarefa');
  let input = document.getElementById('texto-tarefa');
  let taskList = document.getElementById('lista-tarefas');
  botaoAdd.addEventListener('click', function () {
    sessionStorage.setItem(input.innerText, input.innerText);
    let task = document.createElement('li');
    task.innerHTML = sessionStorage.getItem(input.innerText).value;
    taskList.appendChild(task);
  });
}
adicionaTarefa();

function limpaInput() {
  let botaoApaga = document.getElementById('apaga-tudo');
  botaoApaga.addEventListener('click', function () {
    let taskList = document.getElementById('lista-tarefas');
    taskList.children = '';
  });
}
limpaInput();
