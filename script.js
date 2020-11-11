function createList() {
    let button = document.getElementById('criar-tarefa');
    button.addEventListener('click', function () {
        let text = document.getElementById('texto-tarefa');
        let listItems = document.getElementById('lista-tarefas');
        let listChildsElement = document.createElement('li');
        listItems.appendChild(listChildsElement);
        let newText = text.value;
        listChildsElement.innerText = newText;
        text.value = "";


    });
}
createList();