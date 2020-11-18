const listaTarefas = document.querySelector('#lista-tarefas');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const btnApagarTarefas = document.querySelector('#apaga-tudo');
const btnRemoverFinalizados = document.querySelector('#remover-finalizados');
const btnSalvarLista = document.querySelector('#salvar-tarefas');
const btnMoverCima = document.querySelector('#mover-cima');
const btnMoverBaixo = document.querySelector('#mover-baixo');
const btnRemoverSelecionado = document.querySelector('#remover-selecionado');

btnCriarTarefa.addEventListener('click', adicionarTarefa);
btnApagarTarefas.addEventListener('click', apagarTarefas);
btnRemoverFinalizados.addEventListener('click', removerFinalizados);
btnSalvarLista.addEventListener('click', salvarLista);
btnMoverCima.addEventListener('click', moverCima);
btnMoverBaixo.addEventListener('click', moverBaixo);
btnRemoverSelecionado.addEventListener('click', removerSelecionado);

function listaSalva() {
  if (localStorage.getItem('content') !== null) {
    let tarefas = localStorage.getItem('content');
    tarefas = tarefas.split(',');
    
    for (let tarefa of tarefas) {
      const li = document.createElement('li');
      const textNode = document.createTextNode(tarefa);
      li.appendChild(textNode);
      li.addEventListener('click', selecionarTarefa);
      li.addEventListener('dblclick', completarTarefa);

      listaTarefas.appendChild(li);
    }
  }
}

listaSalva()

function adicionarTarefa() {
  const input = document.querySelector('#texto-tarefa');
  const text = input.value;

  if (text === '') {
    return;
  }

  input.value = '';
  const textNode = document.createTextNode(text);
  const li = document.createElement('li');
  li.appendChild(textNode);
  li.addEventListener('click', selecionarTarefa);
  li.addEventListener('dblclick', completarTarefa);

  listaTarefas.appendChild(li);
}

function apagarTarefas() {
  listaTarefas.innerHTML = '';
}

function removerFinalizados() {
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    if (listaTarefas.children[index].classList.contains('completed')) {
      listaTarefas.removeChild(listaTarefas.children[index]);
    }
  }
}

function salvarLista() {
  const conteudo = [];
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    conteudo.push(listaTarefas.children[index].innerText);
  }
  localStorage.setItem('content', conteudo);
}

function selecionarTarefa(event) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }

  const tarefaSelecionada = event.target;
  tarefaSelecionada.classList.add('selected');
}

function completarTarefa(event) {
  const tarefa = event.target;
  
  if (tarefa.classList.contains('completed')) {
    tarefa.classList.remove('completed');
  } else {
    tarefa.classList.add('completed');
  }
}

function moverCima() {
  let tarefaMover = document.querySelector('.selected');
  let tarefas = listaTarefas.children

  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefaMover === tarefas.item(index) && index !== 0) {
      listaTarefas.removeChild(tarefaMover);
      listaTarefas.insertBefore(tarefaMover, tarefas.item(index - 1));
      break;
    } 
  }
}

function moverBaixo() {
  let tarefaMover = document.querySelector('.selected');
  let tarefas = listaTarefas.children

  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefaMover === tarefas.item(index) && index !== tarefas.length - 1) {
      listaTarefas.removeChild(tarefaMover);
      listaTarefas.insertBefore(tarefaMover, tarefas.item(index).nextSibling);
      break;
    } 
  }
}

function removerSelecionado() {
  const tarefaSelecionada = document.querySelector('.selected');
  if (tarefaSelecionada !== null){
    listaTarefas.removeChild(tarefaSelecionada);
  }
}
