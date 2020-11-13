// Reconhecendo o texto digitado no campo input e armazenando (atualizando)
let campoInput = document.getElementById('texto-tarefa');
let buttonCriarTarefa = document.getElementById('criar-tarefa');
let listaTarefasContainer = document.getElementById('lista-tarefas');
let todasTarefasCriadas = document.getElementsByClassName('tarefa');

campoInput.addEventListener('input', atualizaValor);

function atualizaValor(input) {
	campoInput.textContent = input.target.value;
};

// Cria um elemento 'li' para o input e adiciona o elemento ao pai 'ol' on click

buttonCriarTarefa.addEventListener('click', criarTarefa);

function criarTarefa() {
    let tarefaElement = document.createElement('li');
    tarefaElement.className = 'tarefa';
    tarefaElement.addEventListener('click', addSelected);
    tarefaElement.addEventListener('dblclick', addCompleted);
    tarefaElement.textContent = campoInput.textContent;
	listaTarefasContainer.appendChild(tarefaElement);
	document.getElementById('texto-tarefa').value='';
};

// Adiciona classe selected para tarefa e altera cor de fundo
function addSelected(click) {
    for (let index = 0; index < todasTarefasCriadas.length; index += 1) {
        let tarefa = todasTarefasCriadas[index];
        tarefa.classList.remove('selected');
    };
    click.target.classList.toggle('selected');
};

function addCompleted(dblclick) {
    if (dblclick.target.classList.contains('completed')) {
        dblclick.target.classList.remove('completed');
    } else {
        dblclick.target.classList.add('completed');
    };
};
