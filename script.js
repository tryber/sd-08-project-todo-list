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
    };
};

listaDeTarefas();