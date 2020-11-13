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
    tarefaElement.textContent = campoInput.textContent;
	listaTarefasContainer.appendChild(tarefaElement);
	document.getElementById('texto-tarefa').value='';
};

// Adiciona classe selected para tarefa e altera cor de fundo

function addSelected(event) {
    for (let index=0; index < todasTarefasCriadas.length; index += 1) {
        todasTarefasCriadas[index].classList.remove('selected');
        todasTarefasCriadas[index].style.backgroundColor = 'white';
	}
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb(128,128,128)';
}
    






