let listaOrdenadaTarefas = document.getElementById('lista-tarefas');
let botao = document.getElementById('criar-tarefa');
let localTexto = document.getElementById('texto-tarefa');

    
botao.addEventListener('click', function () {
    let tarefaInserida = document.createElement('li')
    tarefaInserida.className = 'tarefa';
    tarefaInserida.innerHTML = localTexto.value;
    localTexto.value = '';
    listaOrdenadaTarefas.appendChild(tarefaInserida);
    tarefaInserida.addEventListener('click', corFundoLista)
    tarefaInserida.addEventListener('dblclick', tarefaConcluida)
});


let tarefaSelecionada = ''; 
function corFundoLista(Event) {
    if (tarefaSelecionada === ''){
        tarefaSelecionada = Event.target; // event é o click. target é o elemento html que aconteceu o evento. 
    } else {
        tarefaSelecionada.style.backgroundColor = 'white';
        tarefaSelecionada = Event.target;
    }
    tarefaSelecionada.style.backgroundColor = 'rgb(128,128,128)';
}
// console.log(Event.target);


let botaoApaga = document.getElementById('apaga-tudo');
botaoApaga.addEventListener('click', function () {
    listaOrdenadaTarefas.innerHTML = ''; 
});


function tarefaConcluida(Event) {
    Event.target.className = 'completed';
    let retiraTarefaConcluida = Event.target;
    retiraTarefaConcluida.addEventListener('dblclick', function(Event) {
        Event.target.className = 'tarefa';
    });
}

let botaoRemoveFinalizados = document.getElementById('remover-finalizados');
botaoRemoveFinalizados.addEventListener('click', function () {
    let tarefaFinalizada = document.getElementsByClassName('completed')
    let tarefaFinalizadaArray = tarefaFinalizada.length;
    for (let index = 0; index < tarefaFinalizadaArray; index+= 1) {
        if( tarefaFinalizada[0].classList.contains('completed')){
            tarefaFinalizada[0].remove();
        }
    }
});

