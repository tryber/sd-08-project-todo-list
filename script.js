const listaOrdenadaTarefas = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

button.addEventListener('click',function evento() {
    let tarefaInserida = document.createElement('li')
    tarefaInserida.className = 'tarefa';
    tarefaInserida.innerHTML = input.value;
    input.value = '';

    listaOrdenadaTarefas.appendChild(tarefaInserida);
});




// let listaCriada = document.getElementsByClassName('li');
// listaCriada.addEventListener('click',function evento() {
//     // let target = evento.target;
   
//     console.log('hi');
// });




// console.log(input);


// const criaTarefa = document.getElementById('criar-tarefa');


// localStorage.removeItem();
// localStorage.setItem();
// localStorage.getItem();
// localStorage.clear();


