
// Requisito 01

let body = document.getElementsByTagName('body');

// Requisito 02

function addParagraph() {
    let paragraph = document.createElement('p');
    paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
    paragraph.id = 'funcionamento'
    paragraph.style.fontStyle = 'italic';

    for (let index = 0; index < body.length; index += 1) {
        body[index].appendChild(paragraph)
    }
}
addParagraph();

// Requisito 03
let boxText = document.createElement('input');
function addInput() {
    
    boxText.id = 'texto-tarefa';
    boxText.type = 'text'
    for (let index = 0; index < body.length; index += 1) {
        body[index].appendChild(boxText);
    }
}

addInput();
// Função adiciona botão
addAssignment();

// Requisito 04

let ol = document.createElement('ol');
function addList() {
    ol.id = 'lista-tarefas'

    for (let index = 0; index < body.length; index += 1) {
        body[index].appendChild(ol);
    }
}

addList();

// Requisito 05

// Função adiciona botao esta sendo chamada apos a criação do input
function addAssignment(){
    let button = document.createElement('button');
    button.id = 'criar-tarefa';
    button.innerText = 'Adicionar';
    button.style.margin = '10px'
    for (let index = 0; index < body.length; index += 1) {
        body[index].appendChild(button);
    }

    button.addEventListener('click', function(){
        let textValue = document.getElementById('texto-tarefa').value;
        let li = document.createElement('li');
        li.innerText = textValue;
        // Adiciona classe em todos elementos da lista
        li.className = 'listItem';
        if (textValue == ''){
            alert('Digite algo!')
        }else{
            ol.appendChild(li)
            document.getElementById('texto-tarefa').value= '';
        }

        // Requisito 08

        li.addEventListener('click', function(event){
          if (li.value !== null){
              
            event.target.style.backgroundColor = '';
          }
          event.target.style.backgroundColor = 'rgb(128,128,128)';
        });

    });
}

