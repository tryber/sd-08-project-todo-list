function addButton () {

    let listaOrdenada = document.getElementById("lista-tarefas");

    let textInput = document.querySelector("#texto-tarefa");

    let novoItem = document.createElement("li");

    listaOrdenada.appendChild(novoItem);

    novoItem.innerText = textInput.value;

    novoItem.className="tarefa";

    textInput.value = "";
}

let addButtonClick = document.querySelector("#criar-tarefa");

addButtonClick.addEventListener("click", function(){
    addButton ();
})




// function add(){
//     let novaTarefa = InputEvent.value;
//     let itemLista = document.createElement('li')

//     itemLista.appendChild(document.createTextNode(novaTarefa));

//     HTMLDataListElement.appendChild(itemLista);
//     inputElement.value = "";
// }

// document.getElementById('criar-tarefa') = function(){
//     add(criarTarefa);
// }



























// var botado = false;

// function botar() {
//     p = document.getElementById(‘lista’);
//     var li = document.createElement(ol);
//     ol.innerHTML = ‘tres’;
//     ol.setAttribute(‘id’, ‘meuId’);
//     p.appendChild(ol);
// }

// function tirar() {
//     i = document.getElementById(‘meuId’);
//     alert(‘Conteudo: ‘+i.innerHTML);
//     document.getElementById(‘lista’).removeChild(i);
//     }