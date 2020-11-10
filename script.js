const criarTarefa = document.querySelector('#criar-tarefa');

criarTarefa.addEventListener('click', tarefa);
addEventListener('click', corLista)

function tarefa (){
  const listaDeTarefas = document.querySelector('#lista-tarefas');
  const tarefa = document.getElementById('texto-tarefa');
  const lista = document.createElement('li');
  lista.className = 'lista';
  lista.innerText = tarefa.value;
  listaDeTarefas.appendChild(lista);
  tarefa.value = "";
}

function corLista (event) {
  const evento = event.target;
  const estilo = event.target.style;
  const lista = document.querySelectorAll('.lista');
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
  if(evento.className == 'lista') {
    if(estilo.backgroundColor != 'rgb(128, 128, 128)'){
      estilo.backgroundColor = 'rgb(128, 128, 128)';
    } 
  }
}