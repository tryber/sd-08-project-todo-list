let btn = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const texto = document.getElementById('texto-tarefa');
const tarefas = document.getElementsByClassName('classeItens')

//requisito 
btn.addEventListener('click', function () {
	if (texto.value.length != 0) {
		let createLi = document.createElement("li");
		list.appendChild(createLi);
		createLi.innerHTML = texto.value;
		texto.value = null;
		createLi.className = "classeItens"
	}
})
//requisito 8
function completo(event) {
	event.target.classList.toggle('feito');
}

list.addEventListener('dblclick', completo)

function alterar(event) {
	for (let i = 0; i < tarefas.length; i += 1) {
		tarefas[i].classList.remove('alteraCor')
		event.target.classList.add('alteraCor')
	}
}

list.addEventListener('click', alterar)
