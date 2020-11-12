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
    listaDeItens.addEventListener('click', removeSelection);
    //listaDeItens.addEventListener('click', functionApagaTarefa);
}

function corFundoClicado() {
    const color = 'rgb(128, 128, 128)';
    listaOrdenada.addEventListener('click', (event) => {
        event.target.style.backgroundColor = color;
        console.log(event.target);
    });
}
corFundoClicado();

function removeSelection(event) {
    listaDeItem = document.getElementsByTagName('li');
    for (let index = 0; index < listaDeItem.length; index += 1) {
        listaDeItem[index].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

botaoApagaTudo.addEventListener('click', functionApagaTarefa);
function functionApagaTarefa() {
    listaOrdenada.innerHTML = '';
}
