//Puxar as informações salvas ao carregar: tarefas listadas
const tarefasListadas = document.querySelector('#lista-tarefas');
tarefasListadas.innerHTML = localStorage.getItem('lista-de-tarefas');

//Adiciona tarefas
document.getElementById('criar-tarefa').addEventListener('click', (event) => {
  const entrada = document.getElementById('texto-tarefa').value;
  const listaTarefas = document.getElementById('lista-tarefas');
  const tarefas = document.createElement('li');
  listaTarefas.appendChild(tarefas);
  tarefas.className = 'lista-de-tarefas';
  tarefas.innerHTML = entrada;
  document.getElementById('texto-tarefa').value = '';
});

//Botão para salvar lista
document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  localStorage.setItem('lista', tarefasListadas.innerHTML);
});

//Pinta as tarefas
const pintaTarefas = document.querySelector('#lista-tarefas');
pintaTarefas.addEventListener('click', (event) => {
  const seleciona = document.getElementsByClassName('selected');
  if (seleciona[0] !== undefined) {
    seleciona[0].classList.remove('selected');
  }
  event.target.classList.add('selected');
});

const riscaTarefas = document.querySelector('#lista-tarefas');
riscaTarefas.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});

document.getElementById('apaga-tudo').addEventListener('click', () => {
  const listas = document.getElementById('lista-tarefas').innerHTML = '';
})
