let addBotaoDeTarefa = document.getElementById('criar-tarefa'); 
let inputDaTarefa = document.getElementById('texto-tarefa'); 
let listaDaTarefa = document.getElementById('lista-tarefas'); 

addBotaoDeTarefa.addEventListener('click', functionCriaTarefa); 
function functionCriaTarefa() {
    let listaDeItens = document.createElement('li');
    listaDeItens.innerText = inputDaTarefa.value;
    listaDaTarefa.appendChild(listaDeItens);
    inputDaTarefa.value = '';
}
