function adicionarTarefa() {
    let tarefa = document.querySelector('#texto-tarefa').value;
    let lista = document.querySelector('#lista-tarefas');
    let elemento = document.createElement('li');
    elemento.className = 'elementos'
    elemento.innerText = tarefa;
    lista.appendChild(elemento);
}
function mudarCor() {
    let lista = document.getElementById('lista-tarefas');
    lista.addEventListener('click', (event) => {
        let elemento = document.querySelectorAll('li');
        for (let contador = 0; contador < elemento.length; contador += 1) {
            elemento[contador].style.backgroundColor = "white";
        }
        event.target.style.backgroundColor = "rgb(128,128,128)";
    })
}
mudarCor()
let riscar = document.getElementById('lista-tarefas');
function cortarItem(event) {
    if (event.target.className.includes('completed') === false) {
        event.target.classList.add('completed');
    } else {
        event.target.classList.remove('completed');
    }
}
riscar.addEventListener('dblclick', cortarItem);
let botaoApagar = document.getElementById('apaga-tudo');
function apagarLista() {
    let lista = document.querySelectorAll('.elementos');
    for (let contador = 0; contador < lista.length; contador += 1) {
      lista[contador].remove();
    }
  }
  let botaoApagarFinalizados =document.querySelector('#remover-finalizados');
  function apagarFinalizados() {
    let lista = document.querySelectorAll('.elementos');
    for (let contador = 0; contador < lista.length; contador += 1) {
      if (lista[contador].classList.contains('completed')) {
        lista[contador].remove();
      }
    }
  }
window.onload = function () {
    let botaoAdicionar = document.querySelector('#criar-tarefa');
    botaoAdicionar.addEventListener('click', adicionarTarefa);
    botaoApagar.addEventListener('click', apagarLista);
    botaoApagarFinalizados.addEventListener('click', apagarFinalizados);

}