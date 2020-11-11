// Botão Adiciona Tarefa
function adicionaTarefa() {
    let input = document.getElementById('texto-tarefa');
    const button = document.getElementById('criar-tarefa');
    let ol = document.getElementById('lista-tarefas');

    button.addEventListener('click', function() {
        const li = document.createElement('li');
        li.innerHTML = input.value;
        ol.appendChild(li); 
        input.value = '';
    })    
}
adicionaTarefa();


//Altera Cor da Lista
function alteraCor() {
    let lista = document.getElementById('lista-tarefas');
    let ultimo = null;
    lista.addEventListener('click', function(evento){
        evento.target.style.backgroundColor = 'rgb(128, 128, 128)'
        if (ultimo === null){
            ultimo = evento.target;
            evento.target.style.backgroundColor = 'rgb(128, 128, 128)'
        }else{
            ultimo.removeAttribute('style');
            ultimo = evento.target;
        }
      
    })
}
alteraCor();


//Marca Tarefas Concluídas
function completaTarefa(){
    let listaOrdenada = document.getElementById('lista-tarefas');
    listaOrdenada.addEventListener('dblclick', function(evento){
        if (evento.target.className == "completed"){
            evento.target.classList.remove('completed');
        }else{
            evento.target.classList.add('completed');
        }
    })
}
completaTarefa();