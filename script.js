const botaoAdiciona = document.getElementById('criar-tarefa');
const caixaDeTexto = document.getElementById('texto-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');
const listaDeItens = document.getElementsByTagName('li');
const botaoApagaTudo = document.getElementById('apaga-tudo');

botaoAdiciona.addEventListener('click', functionCriaTarefa);
function functionCriaTarefa() {
    const listaDeItens = document.createElement('li');
    listaDeItens.innerText = caixaDeTexto.value;
    listaOrdenada.appendChild(listaDeItens);
    caixaDeTexto.value = '';
    listaDeItens.addEventListener('click', corFundoClicado);
    listaDeItens.addEventListener('click', removeSelection);
    listaDeItens.addEventListener("dblclick", tarefaCompleta);
}
function corFundoClicado(event) {
    const color = 'rgb(128, 128, 128)';
        event.target.style.backgroundColor = color;
}
function removeSelection(event) {
    let listaDeItem = document.getElementsByTagName('li');
    for (let index = 0; index < listaDeItem.length; index += 1) {
        listaDeItem[index].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
function tarefaCompleta(event) {
    let elemento = event.target;
    if (elemento.classList.contains("completed")) {
      event.target.classList.remove("completed");
    } else {
      elemento.classList.add("completed");
    }
}
botaoApagaTudo.addEventListener('click', functionApagaTarefa);
function functionApagaTarefa() {
    listaOrdenada.innerHTML = '';
}
