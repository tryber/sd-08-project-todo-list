let addBotaoDeTarefa = documento.getElementById('criar-tarefa'); 
let listaDeTarefa = document.getElementById('texto-tarefa'); 
let textoDaTarefa = document.getElementById('lista-tarefas'); 

addBotaoDeTarefa.addEventListener('click', functionCriaTarefa); 
function functionCriaTarefa() {
    let listaDeItens = document.createElement('li');
    listaDeItens.innerText = listaDeTarefa.value;
    textoDaTarefa.appendChild(listaDeItens);
    listaDeTarefa.value = '';
}
