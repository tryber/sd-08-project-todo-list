let listaOrdenadaTarefas = document.getElementById('lista-tarefas');
let botao = document.getElementById('criar-tarefa');
let localTexto = document.getElementById('texto-tarefa');

    
botao.addEventListener('click', criaLi);

function criaLi () {
    let tarefaInserida = document.createElement('li')
    tarefaInserida.className = 'tarefa';
    tarefaInserida.innerHTML = localTexto.value;
    localTexto.value = '';
    listaOrdenadaTarefas.appendChild(tarefaInserida);
    tarefaInserida.addEventListener('click', corFundoLista)
      
}

let tarefaSelecionada = ''; 
function corFundoLista(Event) {
    if (tarefaSelecionada === ''){
        tarefaSelecionada = Event.target;
    } else {
        tarefaSelecionada.style.backgroundColor = 'white';
        tarefaSelecionada = Event.target;
    }
    tarefaSelecionada.style.backgroundColor = 'rgb(128,128,128)';
    // event é o click
    // target é o elemento html que aconteceu o evento.
    // console.log(Event.target);
   
}


// console.log(input);

// const criaTarefa = document.getElementById('criar-tarefa');

// localStorage.removeItem();
// localStorage.setItem();
// localStorage.getItem();
// localStorage.clear();


