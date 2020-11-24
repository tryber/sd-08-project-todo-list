const btn = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const texto = document.getElementById('texto-tarefa');
const tarefas = document.getElementsByClassName('classeItens');
const botao = document.getElementById('apaga-tudo');
const botaofinal = document.getElementById('remover-finalizados');
const rmvselectedbtn = document.getElementById('remover-selecionado');
const btnSave = document.getElementById('salvar-tarefas');


window.onload = function () {
	for (i = 0; i < localStorage.length; i += 1) {
		let criarLista = document.createElement('li');
		list.appendChild(criarLista);
		let check = localStorage.getItem(i);
		let ultimaPosicao = check.length - 1;
		if (check[ultimaPosicao] == '!') {
			criarLista.innerHTML = check.slice(0, -1);
			criarLista.classList.add('completed')
		} else {
			criarLista.innerHTML = check;
		}

	}
}

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
	event.target.classList.toggle('completed');
}

list.addEventListener('dblclick', completo)

function alterar(event) {
	for (let i = 0; i < tarefas.length; i += 1) {
		tarefas[i].classList.remove('alteraCor')
		event.target.classList.add('alteraCor')
	}
}

list.addEventListener('click', alterar)

botao.addEventListener('click', function () {
	list.innerHTML = '';
})

botaofinal.addEventListener('click', function () {
	let comp = document.querySelectorAll('.completed')
	for (let i = 0; i < comp.length; i += 1) {
		comp[i].remove();
	}

})

rmvselectedbtn.addEventListener('click', function () {
	let selected = document.getElementsByClassName('alteraCor');
	for (let i = 0; i < selected.length; i += 1) {
		selected[i].remove()
	}
})

btnSave.addEventListener('click', function () {
	localStorage.clear();
	let listaOrdenada = document.querySelectorAll('ol li');
	for (let i = 0; i < listaOrdenada.length; i += 1) {
		if (listaOrdenada[i].classList.contains('completed')) {
			localStorage.setItem(localStorage.length, listaOrdenada[i].innerHTML + '!');
		} else {
			localStorage.setItem(localStorage.length, listaOrdenada[i].innerHTML)
		}
	}
}) 
