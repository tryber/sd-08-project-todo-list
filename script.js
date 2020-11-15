//variáveis
const adicionarItem = document.getElementById('criar-tarefa'); //campo com o valor do item
const button = document.getElementById('criar-tarefa'); // botao enviar

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
const lista = document.getElementById('lista-tarefas');
lista.addEventListener('click', function(event) {
    let listaItens = lista.children; // 
    for (let indice = 0; indice < listaItens.length; indice += 1) {
      if (listaItens[indice] == event.target) {
        listaItens[indice].style.backgroundColor = 'rgb(128,128,128)';
      }
        
    }
})