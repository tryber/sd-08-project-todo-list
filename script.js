let listaTarefas = document.getElementById("lista-tarefas");

function criaTarefa () {
    let entradaTarefa = document.getElementById("texto-tarefa");
    let itemList = document.createElement("li");
    itemList.innerText = entradaTarefa.value;
    listaTarefas.appendChild(itemList);
    entradaTarefa.value = "";
}
document.getElementById("criar-tarefa").addEventListener("click",criaTarefa);

function selecionaItem (event) {
    let itens = document.getElementsByTagName("li");
    for (let i=0; i<itens.length; i+=1){
        if (itens[i].style.backgroundColor === "rgb(128, 128, 128)"){
            itens[i].style.backgroundColor = "";
        }
    }
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
}
listaTarefas.addEventListener("click",selecionaItem);

function tarefaCompleta (event) {
    if (event.target.classList.item(0) === "completed") {
        event.target.classList.remove("completed");
    } else {
        event.target.classList.add("completed");
    }
}
listaTarefas.addEventListener("dblclick",tarefaCompleta);