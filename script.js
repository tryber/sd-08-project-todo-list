
// Requisito 01 e Requisito 02
function addHeader() {
    let body = document.getElementsByTagName('body');
    let header = document.createElement('header');
    let h3 = document.createElement('h3');
    let paragraph = document.createElement('p');
    h3.innerText = 'Minha Lista de Tarefas';
    paragraph.id = 'funcionamento'
    paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
    for (let index = 0; index < body.length; index += 1) {
        body[index].appendChild(header).appendChild(h3);
        body[index].appendChild(paragraph)
    }
}

addHeader();

