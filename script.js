// CRIANDO BOTÃO PARA ADCIONAR TAREFA A LISTA
document.querySelector('#criar-tarefa').addEventListener('click', function(){
    let listElement = document.createElement('li');
    document.querySelector('#lista-tarefas').appendChild(listElement);
    listElement.innerHTML = document.querySelector('#texto-tarefa').value;
    document.querySelector('#texto-tarefa').value = '';   
});