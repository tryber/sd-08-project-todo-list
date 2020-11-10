function createList(){
    let button = document.getElementById('criar-tarefa');
    let ol = document.getElementById('lista-tarefas');
    let input = document.getElementById('texto-tarefa');
    button.addEventListener('click', function () {
        let li = document.createElement('li')
        li.innerText += input.value;
        ol.appendChild(li);
        input.value = "";
    })
}
createList();

