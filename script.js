const body = document.querySelector('body');

//Cria o header e o texto que explica
createHeader();
createInput();
createList();


function createHeader() {
    let header = document.createElement('header');
    header.innerHTML = 'Minha Lista de Tarefas';
    body.appendChild(header);

    let instruction = document.createElement('p');
    instruction.id = 'funcionamento';
    instruction.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
    body.appendChild(instruction);
}

function createInput() {
    //Cria input
    let input = document.createElement('input');
    input.id = 'texto-tarefa';
    body.appendChild(input);

    //Cria o botão
    let button = document.createElement('button');
    button.id = 'criar-tarefa';
    button.innerHTML = 'Criar';

    //Adiciona ao botão a função de adicionar itens a lista e limpar o input
    button.addEventListener('click', function(event){
        let lista = document.querySelector('#lista-tarefas');
        let novaTarefa = document.querySelector('#texto-tarefa').value;

        let novaLinha = document.createElement('li');
        novaLinha.innerHTML = novaTarefa;
        lista.appendChild(novaLinha);

        document.querySelector('#texto-tarefa').value = '';
    })

    body.appendChild(button);
}

function createList() {
    let list = document.createElement('ol');
    list.id = 'lista-tarefas';
    body.appendChild(list);

}