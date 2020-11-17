function adicionarTarefa() {
    const item = document.createElement('li');
    const lista = document.querySelector('#lista-tarefas');
    const texto = document.querySelector('#texto-tarefa');
    item.innerHTML = texto.value;
    lista.appendChild(item);
    texto.value = '';
}

const botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', adicionarTarefa);

function tarefaSelecionada(e) {
    let item = document.querySelectorAll('li');
    if (e.target.id !== 'selecionado') {
        for (let check = 0; check < item.length; check += 1) {
            item[check].removeAttribute('id');
        }
        e.target.id = 'selecionado';
    } else if (e.target.id === 'selecionado') {
        e.target.removeAttribute('id');
    }
}

const lista = document.querySelector('#lista-tarefas');
lista.addEventListener('click', tarefaSelecionada);

function tarefasCompletas(e) {
    if (e.target.className !== 'completed') {
        e.target.className = 'completed'
    } else if (e.target.className === 'completed') {
        e.target.classList.remove('completed');
    }
}

lista.addEventListener('dblclick', tarefasCompletas);

function apagaTarefas() {
    let item = document.querySelectorAll('li');
    for (let i = 0; i < item.length; i += 1){
        lista.removeChild(item[i]);
    }
}

let apagador = document.querySelector('#apaga-tudo');
apagador.addEventListener('click', apagaTarefas);

function apagaCompletos() {
    let item = document.querySelectorAll('.completed');
    for (let i = 0; i < item.length; i += 1){
        lista.removeChild(item[i]);
    }
}

let botaoCompletos = document.querySelector('#remover-finalizados');
botaoCompletos.addEventListener('click', apagaCompletos);
