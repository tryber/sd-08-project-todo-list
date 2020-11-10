
// Requisito 01 e Requisito 02 Requisito 03

function addHeader() {
    let body = document.getElementsByTagName('body');
    let header = document.createElement('header');
    let h3 = document.createElement('h3');
    let paragraph = document.createElement('p');
    let boxText = document.createElement('input');
    boxText.id = 'texto-tarefa';
    boxText.type = 'text'
    h3.innerText = 'Minha Lista de Tarefas';
    paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
    paragraph.id = 'funcionamento'
    for (let index = 0; index < body.length; index += 1) {
        body[index].appendChild(header).appendChild(h3);
        body[index].appendChild(paragraph)
        body[index].appendChild(boxText)
    }
}

addHeader();

