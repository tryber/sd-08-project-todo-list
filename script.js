function createLi (string) {
    let createLi = document.createElement('li');
    let selectOl = document.getElementById('lista-tarefas');
    createLi.innerText = string; 
    selectOl.appendChild(createLi);    
}

function jobCreate () {
    let selectBottonJobCreate = document.getElementById('criar-tarefa');
    selectBottonJobCreate.addEventListener('click', e =>{
        let selectText = document.getElementById('texto-tarefa').value;
        createLi(selectText);
        document.getElementById('texto-tarefa').value ="";
    });
}

jobCreate();

function clickItens () {
    let selectItens = document.getElementById('lista-tarefas');
    selectItens.addEventListener('click', e =>{
        e.target.classList.add('item-list');
        if(e.target.classList.contains('item-list')) {
            document.querySelectorAll('.item-list').forEach((Element) => {
                Element.classList.remove('item-list');
            });
            e.target.classList.add('item-list');
        }
    });
}

clickItens();


function doubleClickItens () {
    let selectItens = document.getElementById('lista-tarefas');
    selectItens.addEventListener('dblclick', e => {
        if(e.target.classList.contains('completed')) {
            e.target.classList.remove('completed');
        } else {
            e.target.classList.add('completed');
        }
    })
}

doubleClickItens();

function cleanAll () {
    let selectButton = document.getElementById('apaga-tudo');
    selectButton.addEventListener('click', e => {
        let removeLi = document.getElementById('lista-tarefas');
        while (removeLi.hasChildNodes()) {
            removeLi.removeChild(removeLi.firstChild);
        }
    });
}

cleanAll();

function removeFinished () {
    let selectButton = document.getElementById('remover-finalizados');
    selectButton.addEventListener('click', e=> {
        document.querySelectorAll('.completed').forEach((Element) => {
            Element.remove()
        })
    })
}

removeFinished();