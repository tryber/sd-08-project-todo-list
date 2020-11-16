let listaTarefas = document.getElementById("lista-tarefas");
let tarefas = document.getElementsByTagName("li");

window.onload = function () {
    listaTarefas.innerHTML = localStorage.getItem('listaTarefas');
}

function criaTarefa () {
    let entradaTarefa = document.getElementById("texto-tarefa");
    let itemList = document.createElement("li");
    itemList.innerText = entradaTarefa.value;
    listaTarefas.appendChild(itemList);
    entradaTarefa.value = "";
}
document.getElementById("criar-tarefa").addEventListener("click",criaTarefa);

function selecionaItem (event) {
    for (let i=0; i<tarefas.length; i+=1){
        if (tarefas[i].style.backgroundColor === "rgb(128, 128, 128)"){
            tarefas[i].style.backgroundColor = "";
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

function apagaLista () {
    // Trecho retirado de ---https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild --- Para apagar todos os filhos de um elemento
    while (listaTarefas.firstChild) {
        listaTarefas.removeChild(listaTarefas.firstChild);
    }
}
document.getElementById("apaga-tudo").addEventListener("click",apagaLista);

function apagaFinalizados () {
    let finalizados = document.querySelectorAll(".completed");
    for(let i=0; i<finalizados.length; i+=1){
        listaTarefas.removeChild(finalizados[i]);
    }
}
document.getElementById("remover-finalizados").addEventListener("click",apagaFinalizados);

function salvaLista () {
    localStorage.setItem('listaTarefas', listaTarefas.innerHTML);
}
document.getElementById("salvar-tarefas").addEventListener("click",salvaLista);

function moverCima () {
    if (tarefas.length > 1){
        for (let i=0; i<tarefas.length; i+=1){
            if (tarefas[i].style.backgroundColor === "rgb(128, 128, 128)"){
            var selecionado = i;
            }
        }
        if (selecionado !== 0 && selecionado !== undefined) {
            let tarefaSelecionada = tarefas[selecionado].innerText;
            let tarefaCima = tarefas[selecionado-1].innerText;

            tarefas[selecionado-1].innerText = tarefaSelecionada;
            tarefas[selecionado-1].style.backgroundColor = "rgb(128, 128, 128)";
            tarefas[selecionado].innerText = tarefaCima;
            tarefas[selecionado].style.backgroundColor = "";
        }
    }
}
document.getElementById("mover-cima").addEventListener("click",moverCima);

function moverBaixo () {
    if (tarefas.length > 1){
        for (let i=0; i<tarefas.length; i+=1){
            if (tarefas[i].style.backgroundColor === "rgb(128, 128, 128)"){
            var selecionado = i;
            }
        }
        if (selecionado !== tarefas.length-1 && selecionado !== undefined) {
            let tarefaSelecionada = tarefas[selecionado].innerText;
            let tarefaBaixo = tarefas[selecionado+1].innerText;

            tarefas[selecionado+1].innerText = tarefaSelecionada;
            tarefas[selecionado+1].style.backgroundColor = "rgb(128, 128, 128)";
            tarefas[selecionado].innerText = tarefaBaixo;
            tarefas[selecionado].style.backgroundColor = "";
        }
    }
}
document.getElementById("mover-baixo").addEventListener("click",moverBaixo);

function apagaSelecionado () {
    for (let i=0; i<tarefas.length; i+=1){
        if (tarefas[i].style.backgroundColor === "rgb(128, 128, 128)"){
           var selecionado = i;
        }
    }
    if (selecionado !== undefined){
        listaTarefas.removeChild(tarefas[selecionado]);
    }
}
document.getElementById("remover-selecionado").addEventListener("click",apagaSelecionado);