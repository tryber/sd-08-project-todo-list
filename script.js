
// Requisito 01
function addHeader() {
    let body = document.getElementsByTagName('body');
    let header = document.createElement('header');
    let h3 = document.createElement('h3');
    h3.innerText = 'Minha Lista de Tarefas';
    for (let index = 0; index < body.length; index += 1) {
        body[index].appendChild(header).appendChild(h3)
    }
}

addHeader();

// Requisito 02