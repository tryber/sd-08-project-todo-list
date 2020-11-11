const listaOrdenadaTarefas = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

    
button.addEventListener('click', criaLi);

function criaLi () {
    let tarefaInserida = document.createElement('li')
    tarefaInserida.className = 'tarefa';
    tarefaInserida.innerHTML = input.value;
    input.value = '';
    listaOrdenadaTarefas.appendChild(tarefaInserida);
    tarefaInserida.addEventListener('click', corFundoLista)
      
}

function corFundoLista(Event) {
    Event.target.style.backgroundColor = 'rgb(128,128,128)';
    // event é o click
    // target é o elemento html que aconteceu o evento.
    // console.log(Event.target);
    // event.target = <li></li> 
}



// console.log(input);


// const criaTarefa = document.getElementById('criar-tarefa');


// localStorage.removeItem();
// localStorage.setItem();
// localStorage.getItem();
// localStorage.clear();


