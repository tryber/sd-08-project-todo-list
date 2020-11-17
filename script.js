const tarefa = document.querySelector('#texto-tarefa');
const botaoAdicionar = document.querySelector('#criar-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');

function novaTarefa() {
    botaoAdicionar.addEventListener('click', function () {
        if (tarefa.value.length > 0) {
            let item = document.createElement('li');
            item.className = 'item';
            item.innerText = tarefa.value;
            listaTarefa.appendChild(item);
            tarefa.value = '';                                  
        } else {
            alert('Não esqueça de digitar o nome da tarefa!')
        }                 
    })
}
novaTarefa();

function selecionaItem() {
   
    listaTarefa.addEventListener('click', function (event) {
        let itemSelecionado = document.querySelector('.selected');
        if (itemSelecionado == null) {
            event.target.classList.add('selected');
        } else {
            itemSelecionado.classList.remove('selected');
            event.target.classList.add('selected');
        }
    })    
}
selecionaItem();

function concluiItem() {
    listaTarefa.addEventListener('dblclick', function (event) {
        let itens = document.querySelector('.completed');
        if (event.target !== itens) {
            event.target.classList.add('completed');
        } else {
            event.target.classList.remove('completed');
        }
        
    })
}
concluiItem();