//variáveis
const adicionarItem = document.getElementById('criar-tarefa'); //campo com o valor do item
const button = document.getElementById('criar-tarefa'); // botao enviar
const lista = document.getElementById('lista-tarefas'); // lista de tarefas
const reset = document.getElementById("apaga-tudo"); //button apaga tudo

// nao permite que atualize a page ao click do button
button.addEventListener('click', function(event) {
    event.preventDefault();
})

//cria uma 'li' com valor de item para cada item adicionado
adicionarItem.addEventListener('click', function (event){
    
    const item = document.getElementById('texto-tarefa');
    const ol = document.getElementById('lista-tarefas');
    const li = document.createElement('li');

    ol.appendChild(li);
    li.innerHTML = item.value
    item.value = '';
})

//altera a cor de fundo do item da lista clicado
lista.addEventListener('click', function selectItem(event) {
    event.target.classList.toggle('selected');
})

//risca o item finalizado da lista
lista.addEventListener("dblclick", function (event) {
    event.target.classList.toggle('completed');
})

//apaga tudo
reset.addEventListener('click', function deletAll () {
    let liElement = document.getElementsByTagName('li');
    for (key in liElement) {
        lista.innerHTML = '';
    }
})