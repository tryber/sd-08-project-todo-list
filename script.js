let textoTarefa = document.getElementById("texto-tarefa");
let btnCriaTarefa = document.getElementById("criar-tarefa");
btnCriaTarefa.addEventListener("click", function () {
    if (textoTarefa.value != "") {
    let novaTarefa = textoTarefa.value;
    textoTarefa.value = "";
    console.log(novaTarefa);
    let lista = document.getElementById("lista-tarefas");
    let itemLista = document.createElement("li");
    itemLista.innerHTML = novaTarefa;
    lista.appendChild(itemLista)

    }
})
