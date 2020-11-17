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
            event.target.className = 'item selected';
        } else {
            itemSelecionado.className = 'item';
            event.target.className = 'item selected';
        }
    })    
}
selecionaItem();
