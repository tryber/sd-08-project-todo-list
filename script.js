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