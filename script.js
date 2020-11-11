// Reconhecendo o texto digitado no campo input e armazenando (atualizando)
const campoInput = document.getElementById('texto-tarefa');

campoInput.addEventListener('input', atualizaValor);

function atualizaValor(input) {
	campoInput.textContent = input.target.value;
};
