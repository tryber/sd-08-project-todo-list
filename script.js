const qSelector = (element) => document.querySelector(element);



let textoTarefas = qSelector('#texto-tarefa');
textoTarefas.addEventListener('keyup', (event)=>{
    if(event.keyCode === 13 && textoTarefas.value.length >= 3) {
        let textoTarefa = qSelector('#texto-tarefa');
        const listaTarefas = qSelector('#lista-tarefas');        
        let listaItem = document.createElement('li');
        listaItem.innerText = textoTarefa.value;
        listaTarefas.appendChild(listaItem);
        textoTarefa.value = '';        
    } else if(event.keyCode === 13 && textoTarefas.value.length <= 2){
        alert('Digite uma tarefa!')
    }
});
let criarTarefas = qSelector('#criar-tarefas');
criarTarefas.addEventListener('click', () => {
    let textoTarefa = qSelector('#texto-tarefa');
    const listaTarefas = qSelector('#lista-tarefas');    
    if (textoTarefa.value.length >= 3) {
        let listaItem = document.createElement('li');
        listaItem.innerText = textoTarefa.value;
        listaTarefas.appendChild(listaItem);
        textoTarefa.value = '';
    } else {
        alert('Digita uma tarefa!')
    }    
});