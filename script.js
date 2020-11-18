function listaDeTarefas() {
    const botaoTarefa = document.getElementById('criar-tarefa');
    botaoTarefa.addEventListener('click', novaTarefa);

    function novaTarefa() {
        const entradaTexto = document.querySelector('#texto-tarefa');
        const tarefaOl = document.querySelector('#lista-tarefas');
        const tarefaLi = document.createElement('li');
        tarefaOl.appendChild(tarefaLi);
        tarefaLi.innerText = entradaTexto.value;
        entradaTexto.value = '';
        tarefaLi.addEventListener('click', mudaDeCor);
        tarefaLi.addEventListener('dblclick', tarefaCompleta);
    };
};

listaDeTarefas();

function mudaDeCor(event) {
    const itemDaLista = document.querySelectorAll('li');
    for (let lista = 0; lista < itemDaLista.length; lista += 1) {
        itemDaLista[lista].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';

}

function tarefaCompleta(event) {
    const item = event.target;
    if (item.classList.contains('completed')) {
        event.target.classList.remove ('completed');
    } else {
        item.classList.add('completed')
    }
}

function apagaTudo() {
    const botaoExcluir = document.getElementById('apaga-tudo');
    const tarefaOl = document.getElementById('lista-tarefas');
    botaoExcluir.addEventListener('click', function() {
        tarefaOl.innerText = '';
    });
}
apagaTudo();