function limpaCampoInput() {
  const inputCampo = document.querySelector('#texto-tarefa');
  inputCampo.value = '';
}


function trocaCorElementoLista(elemento){
    console.log(elemento.target)
    elemento.target.classList.add('colore-elemento-lista');
}


function verificaCliqueLista() {
    const lista = document.querySelectorAll('.elemento-lista');
    for (let index = 0; index < lista.length; index += 1) {
        lista[index].addEventListener('click', trocaCorElementoLista)
    }
}

function adicionaTarefaLista() {
    const tarefaInput = document.querySelector('#texto-tarefa').value;
    limpaCampoInput();
    const listaOrdenada = document.querySelector('#lista-tarefas');
    const elementoLista = document.createElement('li');
    elementoLista.className = 'elemento-lista'
    elementoLista.innerText = tarefaInput;
    listaOrdenada.appendChild(elementoLista);
    verificaCliqueLista();
  }


window.onload = function () {
  const botaoAdicionar = document.querySelector('#criar-tarefa');
  botaoAdicionar.addEventListener('click', adicionaTarefaLista);
  verificaCliqueLista();
};
