    const entrada = document.getElementById('texto-tarefa');

    const botao = document.getElementById('criar-tarefa');

    const listaOrdenada = document.getElementById('lista-tarefas');
    

    botao.addEventListener('click', criarElemento);

    function criarElemento() {
        const itemLista = document.createElement('li');
        itemLista.innerText = entrada.value;
        itemLista.addEventListener('click', selecionarCor);
        listaOrdenada.appendChild(itemLista);
        entrada.value = "";
    }

    function selecionarCor() {

    };