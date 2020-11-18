const qSelector = (element) => document.querySelector(element);
const qSelectorAll = (element) => document.querySelectorAll(element);



// let textoTarefas = qSelector('#texto-tarefa');
// textoTarefas.addEventListener('keyup', (event)=>{
//     if(event.keyCode === 13 && textoTarefas.value.length >= 3) {
//         let textoTarefa = qSelector('#texto-tarefa');
//         const listaTarefas = qSelector('#lista-tarefas');        
//         let listaItem = document.createElement('li');
//         listaItem.className = 'tarefa';
//         listaItem.innerText = textoTarefa.value;
//         listaTarefas.appendChild(listaItem);
//         textoTarefa.value = ''; 
//         selecionarTarefa();    
//     } else if(event.keyCode === 13 && textoTarefas.value.length <= 2){
//         alert('Digite uma tarefa!');
//     }; 
// });


let criarTarefas = qSelector('#criar-tarefa');
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
    selecionarTarefa();
    
    
});

function selecionarTarefa() {    
    const tarefas = qSelectorAll('.tarefa');
    tarefas.forEach((item) => {
        item.addEventListener('click', () => {
           if(item.classList.contains('selected') == false){
               let selectedItem = qSelector('.selected');
               item.classList.add('selected');
               console.log('show')
               if(selectedItem != null){
                   selectedItem.classList.remove('selected');
               };
           };
        });
    });
};