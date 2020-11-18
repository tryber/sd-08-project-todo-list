const qSelector = (element) => document.querySelector(element);
const qSelectorAll = (element) => document.querySelectorAll(element);


const criarTarefas = qSelector('#criar-tarefa');
const listaTarefas = qSelector('#lista-tarefas');


criarTarefas.addEventListener('click', () => {
    let textoTarefa = qSelector('#texto-tarefa');
    const listaTarefas = qSelector('#lista-tarefas');
    if (textoTarefa.value.length >= 3) {
        let listaItem = document.createElement('li');
        listaItem.className = 'tarefa';
        listaItem.innerText = textoTarefa.value;
        listaTarefas.appendChild(listaItem);
        textoTarefa.value = '';
    } else {
        alert('Digita uma tarefa!')
    };
});

listaTarefas.addEventListener('click', (event) => {
    if (event.target.classList.contains('selected') == false) {
        let itemSelecionado = qSelector('.selected');
        if (itemSelecionado != null && itemSelecionado.classList.contains('selected')) {
            itemSelecionado.classList.remove('selected');
        }
        event.target.classList.add('selected');
    }
})



listaTarefas.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed')
})
