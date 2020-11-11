// Reconhecendo o texto digitado no campo input e armazenando (atualizando)
const campoInput = document.getElementById('texto-tarefa');

campoInput.addEventListener('input', atualizaValor);

function atualizaValor(input) {
	campoInput.textContent = input.target.value;
};


// Cria um elemento 'li' para o input e adiciona o elemento ao pai 'ol' on click

const buttonCriarTarefa = document.getElementById('criar-tarefa');

buttonCriarTarefa.addEventListener('click', criarTarefa);

function criarTarefa() {
	const tarefaElement = document.createElement('li');
	tarefaElement.textContent = campoInput.textContent;
	const listaTarefasContainer = document.getElementById('lista-tarefas');
	listaTarefasContainer.appendChild(tarefaElement);
	document.getElementById('texto-tarefa').value='';
};

