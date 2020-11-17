function adicionarTarefa() {
    let item = document.createElement('li');
    let lista = document.querySelector('#lista-tarefas');
    let texto = document.querySelector('#texto-tarefa');
    item.innerHTML = texto.value;
    lista.appendChild(item);
    texto.value = '';
}

let botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', adicionarTarefa);