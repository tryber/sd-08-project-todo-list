//Puxar as informações salvas ao carregar: tarefas listadas
const tarefasListadas = document.getElementById('lista-tarefas');
tarefasListadas.innerHTML = localStorage.getItem('lista');

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
//Botão risca tarefas
const riscaTarefas = document.querySelector('#lista-tarefas');
riscaTarefas.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});
//Botão apaga tudo
document.getElementById('apaga-tudo').addEventListener('click', () => {
  document.getElementById('lista-tarefas').innerHTML = '';
})
//Botão remove finalizados
document.getElementById('remover-finalizados').addEventListener('click', (event) => {
  const finalizados = document.querySelectorAll('.lista-de-tarefas');
  for (let index = 0; index < finalizados.length; index += 1) {
    if (finalizados[index].classList.contains('completed')) {
      finalizados[index].remove();
    }
  }
});
//Botão remover selecionado
document.getElementById('remover-selecionado').addEventListener('click', (event) => {
  const selecionado = document.getElementsByClassName('lista-de-tarefas');
  for (let index = 0; index < selecionado.length; index += 1) {
    if (selecionado[index].classList.contains('selected')) {
      selecionado[index].remove();
    }
  }
});
