const adicionarItem = document.getElementById('criar-tarefa');
const button = document.getElementById('criar-tarefa');

button.addEventListener('click', function(event) {
    event.preventDefault();
})

adicionarItem.addEventListener('click', function (event){
    
    const item = document.getElementById('texto-tarefa');
    const ol = document.getElementById('lista-tarefas');
    const li = document.createElement('li');

    ol.appendChild(li);
    li.innerHTML = item.value
    
    item.value = '';
})