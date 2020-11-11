const listaPai = document.querySelector('#lista-tarefas')
const botaoAdd = document.querySelector('#criar-tarefa')
const input = document.querySelector('#texto-tarefa')


botaoAdd.addEventListener('click',function adicionarTarefas(){
    let tasks = document.createElement('li');
    tasks.innerText = input.value;
    listaPai.appendChild(tasks);
    input.value = ' ';
});