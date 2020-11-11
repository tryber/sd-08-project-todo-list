const listaPai = document.querySelector('#lista-tarefas');
const botaoAdd = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const lista = document.querySelectorAll('.lis');


botaoAdd.addEventListener('click',function adicionarTarefas(){
    let tasks = document.createElement('li');
    tasks.innerText = input.value;
    listaPai.appendChild(tasks);
    input.value = '';
    tasks.className="lis"
});
console.log(lista);

for(let index = 0; index < lista.length; index+=1){
    listaPai.addEventListener('click', function(event){
        event.target.style.backgroundColor = 'rgb(128,128,128)';
    })
}
