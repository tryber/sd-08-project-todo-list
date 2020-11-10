
// Requisito 01

let body = document.getElementsByTagName('body');
function addHeader() {
    let header = document.createElement('header');
    let h3 = document.createElement('h3');
    h3.innerText = 'Minha Lista de Tarefas';

    for (let index = 0; index < body.length; index += 1) {
        body[index].appendChild(header).appendChild(h3);
    }
}

addHeader();

// Requisito 02

function addParagraph (){
    let paragraph = document.createElement('p');
    paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
    paragraph.id = 'funcionamento'

    for (let index = 0; index < body.length; index += 1) {
        body[index].appendChild(paragraph)
    }
}
addParagraph();

// Requisito 03

function addInput(){
    let boxText = document.createElement('input');
    boxText.id = 'texto-tarefa';
    boxText.type = 'text'
    for (let index = 0; index < body.length; index += 1) {
        body[index].appendChild(boxText);
    }
}

addInput();

// Requisito 04