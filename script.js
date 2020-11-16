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
        event.target.style.backgroundColor = 'rgb(128,128,128)';
    });
}

clickItens();