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
    };
};

listaDeTarefas();

function mudaDeCor(event) {
    itemDaLista = document.querySelectorAll('li');
    for (let lista = 0; lista < itemDaLista.length; lista += 1) {
        itemDaLista[lista].style.backgroundColor = 'rgb(128,128,128)';
    }
}