//Puxar as informações salvas ao carregar: tarefas listadas.
const tarefasListadas = document.getElementById('lista-tarefas');
tarefasListadas.innerHTML = localStorage.getItem('lista-de-tarefas');

//Adiciona tarefas.
document.getElementById('criar-tarefa').addEventListener('click', (event) => {
  const entrada = document.getElementById('texto-tarefa').value;
  const listaTarefas = document.getElementById('lista-tarefas');
  const tarefas = document.createElement('li');
  listaTarefas.appendChild(tarefas);
  tarefas.className = 'lista-de-tarefas';
  tarefas.innerHTML = entrada;
  document.getElementById('texto-tarefa').value = '';
});

//Pinta as tarefas.
const pintaTarefas = document.getElementById('lista-tarefas');
pintaTarefas[0].addEventListener('click', (event) => {
  const seleciona = document.getElementsByClassName('selected');
  if (seleciona[0] !== undefined) {
    seleciona[0].classList.remove('selected');
  }
  event.target.classList.add('selected');
});
