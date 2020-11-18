let btn = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const texto = document.getElementById('texto-tarefa');

//requisito 
btn.addEventListener('click', function () {
	if (texto.value.length != 0){
	let createLi = document.createElement("li");
	list.appendChild(createLi);
	createLi.innerHTML = texto.value;
	texto.value = null;
	}
})