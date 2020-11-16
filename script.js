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




// if(e.target.classList.contains('item-list')) {
//     document.querySelectorAll('.item-list').forEach((Element) => {
//         Element.classList.remove('item-list');
//     });
//     e.target.classList.add('item-list')
// }