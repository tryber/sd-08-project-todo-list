// Reconhecendo o texto digitado no campo input e armazenando (atualizando)
const campoInput = document.getElementById('texto-tarefa');
const  buttonCriarTarefa = document.getElementById('criar-tarefa');
const  listaTarefasContainer = document.getElementById('lista-tarefas');
const  todasTarefasCriadas = document.getElementsByClassName('tarefa');
const  buttonApagaTudo = document.getElementById('apaga-tudo');
const  buttonRemoverFinalizados = document.getElementById('remover-finalizados');

// Campo Input para receber a string com a tarefa

function atualizaValor(input) {
  campoInput.textContent = input.target.value;
}

campoInput.addEventListener('input', atualizaValor);

// Cria um elemento 'li' para o input e adiciona o elemento ao pai 'ol' on click

function criarTarefa() {
  const tarefaElement = document.createElement('li');
  tarefaElement.className = 'tarefa';
  tarefaElement.addEventListener('click', addSelected);
  tarefaElement.addEventListener('dblclick', addCompleted);
  tarefaElement.textContent = campoInput.textContent;
  listaTarefasContainer.appendChild(tarefaElement);
  document.getElementById('texto-tarefa').value='';
}

buttonCriarTarefa.addEventListener('click', criarTarefa);

// Adiciona classe selected para tarefa e altera cor de fundo

function addSelected(click) {
  for (let index = 0; index < todasTarefasCriadas.length; index += 1) {
    const tarefa = todasTarefasCriadas[index];
    tarefa.classList.remove('selected');
  }
  click.target.classList.toggle('selected');
}

// Adiciona e remove a classe completed com dois clicks

function addCompleted(dblclick) {
  if (dblclick.target.classList.contains('completed')) {
    dblclick.target.classList.remove('completed');
  } else {
    dblclick.target.classList.add('completed');
  }
}

// Botão apaga tudo que limpa todas as tarefas

buttonApagaTudo.addEventListener('click', apagaTudo);

function apagaTudo() {
  document.location.reload(true);
}

// Botão remover tarefas completadas

function removeCompleted() {
  const selected = document.querySelectorAll('.completed');
  for (let index = 0; index < selected.length; index += 1) {
	listaTarefasContainer.removeChild(selected[index]);
  }
}

buttonRemoverFinalizados.addEventListener('click', removeCompleted);
