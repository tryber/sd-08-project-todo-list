// fiz o código com a ajuda do colega Leandro Piasseta

function createList() {                                      // criada função para gerar lista (li)
    let button = document.getElementById('criar-tarefa');
    button.addEventListener('click', function () {
        let text = document.getElementById('texto-tarefa');     // criada variável para pegar o id "texto-tarefa"
        let listItems = document.getElementById('lista-tarefas'); // variável criada pra pegar o id "lista-tarefas" (ol)
        let listChildrenElement = document.createElement('li');    // criado os elementos "LI"
        listItems.appendChild(listChildrenElement);                // os elementos "li" são filhas de "ol"
        let newText = text.value;                                  // o texto criado irá receber o valor
        listChildrenElement.innerText = newText;
        text.value = "";
        listChildrenElement.addEventListener('click', elementColor);
        listChildrenElement.addEventListener('dblclick', capturarClick);

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




function capturarClick(event) {
    event.target.classList.toggle('completed');
}
