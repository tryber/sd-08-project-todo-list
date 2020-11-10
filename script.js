const text = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');


button.addEventListener('click', function () {
    const list = document.getElementById('lista-tarefas');
    const item = document.createElement('li');
    list.appendChild(item);
    item.innerHTML = text.value;
    text.value = '';
});