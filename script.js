const qSelector = (element) => document.querySelector(element);
const qSelectorAll = (element) => document.querySelectorAll(element);


const criarTarefas = qSelector('#criar-tarefa');
const listaTarefas = qSelector('#lista-tarefas');
const apagaTudo = qSelector('#apaga-tudo');
const removerFinalizados = qSelector('#remover-finalizados');


criarTarefas.addEventListener('click', () => {
  const textoTarefa = qSelector('#texto-tarefa');

  if (textoTarefa.value.length >= 3) {
      const listaItem = document.createElement('li');
      listaItem.className = 'tarefa';
      listaItem.innerText = textoTarefa.value;
      listaTarefas.appendChild(listaItem);
      textoTarefa.value = '';
} else {
      alert('Digita uma tarefa!');
}
});

listaTarefas.addEventListener('click', (event) => {
  if (event.target.classList.contains('selected') === false) {
      const itemSelecionado = qSelector('.selected');
      if (itemSelecionado != null && itemSelecionado.classList.contains('selected')) {
          itemSelecionado.classList.remove('selected');
    }
    event.target.classList.add('selected');
};
});

listaTarefas.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed')
});

apagaTudo.addEventListener('click', () =>{
    while(listaTarefas.firstChild){
        listaTarefas.removeChild(listaTarefas.lastChild)
    };
});

removerFinalizados.addEventListener('click', () => {
    let itemsCompletos = qSelectorAll('.completed');
    for(let index = 0; index < itemsCompletos.length; index += 1){
        listaTarefas.removeChild(itemsCompletos[index]);
    }
});
