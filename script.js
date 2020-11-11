// Reconhecendo o texto digitado no campo input e armazenando (atualizando)
const campoInput = document.getElementById('texto-tarefa');

campoInput.addEventListener('input', atualizaValor);

function atualizaValor(input) {
	campoInput.textContent = input.target.value;
};

// function toggleSelected(event) {
//     event.target.classList.toggle('selected');
//     };

function toggleSelected(click) {
    click.target.classList.toggle('selected');
    const tarefasContainer = document.querySelectorAll('.tarefa');
    for (let index = 0; index < tarefasContainer.length; index += 1) {
        const tarefa = tarefasContainer[index];
        if (tarefa.classList.contains('selected') === true) {
            tarefa.classList.remove('selected');
        } else {
            click.target.classList.toggle('selected');
        };
    };
};


// Cria um elemento 'li' para o input e adiciona o elemento ao pai 'ol' on click

const buttonCriarTarefa = document.getElementById('criar-tarefa');

buttonCriarTarefa.addEventListener('click', criarTarefa);

function criarTarefa() {
    const tarefaElement = document.createElement('li');
    tarefaElement.className = 'tarefa';
    tarefaElement.textContent = campoInput.textContent;
    tarefaElement.addEventListener('click', toggleSelected);
	const listaTarefasContainer = document.getElementById('lista-tarefas');
	listaTarefasContainer.appendChild(tarefaElement);
	document.getElementById('texto-tarefa').value='';
};

