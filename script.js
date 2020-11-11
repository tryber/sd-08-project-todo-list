//puxar ao carregar
const listaTarefas = document.getElementById('lista-tarefas');
listaTarefas.innerHTML = localStorage.getItem('lista');

//Adiciona tarefas
let selButtom = document.querySelector('#criar-tarefa');
let selInput = document.querySelector('#texto-tarefa');
let selLista = document.querySelector('#lista-tarefas');
selButtom.addEventListener('click', function () {
  let textoInput = selInput.value;
  let adiciona = document.createElement('li');
  adiciona.innerText = textoInput;
  adiciona.className = 'lista';
  selLista.appendChild(adiciona);
  selInput.value = ''
});

//Seleciona tarefas
selLista.addEventListener('click', function (event) {
  let selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
});

//Coloca risco de completed
selLista.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  };
});

//Limpa Lista
document.querySelector('#apaga-tudo').addEventListener('click', function (event) {
  if (event.target.id === 'apaga-tudo') {
    selLista.innerHTML = '';
  };
});

//Remove finalizados
document.getElementById('remover-finalizados').addEventListener('click', function () {
  let listaCompletos = document.querySelectorAll(".completed");
  for (let i = 0; i < listaCompletos.length; i += 1) {
    document.getElementById("lista-tarefas").removeChild(listaCompletos[i]);
  }
});

//Salva Lista
document.querySelector('#salvar-tarefas').addEventListener('click', function() {
  localStorage.setItem('lista', listaTarefas.innerHTML);
});