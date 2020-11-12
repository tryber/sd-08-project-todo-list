// fiz o código com a ajuda do colega Leandro Piasseta

function createList() {
    let button = document.getElementById('criar-tarefa');
    button.addEventListener('click', function () {
        let text = document.getElementById('texto-tarefa');
        let listItems = document.getElementById('lista-tarefas');
        let listChildrenElement = document.createElement('li');
        listItems.appendChild(listChildrenElement);
        let newText = text.value;
        listChildrenElement.innerText = newText;
        text.value = "";
        listChildrenElement.addEventListener('click', elementColor);

    });
}

createList();

// fiz o código com a ajuda do colega Leandro Piasseta
function elementColor(event) {
    let itemsList = document.querySelectorAll('li');
    for (let i = 0; i < itemsList.length; i += 1) {
        itemsList[i].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
}