let textoTarefa = document.getElementById("texto-tarefa");
let btnCriaTarefa = document.getElementById("criar-tarefa");
btnCriaTarefa.addEventListener("click", function () {
    if (textoTarefa.value != "") {
    let novaTarefa = textoTarefa.value;
    textoTarefa.value = "";
    let lista = document.getElementById("lista-tarefas");
    let itemLista = document.createElement("li");
    itemLista.innerHTML = novaTarefa;
    itemLista.className = "tarefa-na-lista";
    lista.appendChild(itemLista);
    itemLista.addEventListener("click", function () {
    itemLista.style.backgroundColor = "rgb(128, 128, 128)";
    })
    }
});
// para fazer essa funcionalidade abaixo pesquisei na internet e utilizei o link: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
textoTarefa.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        let novaTarefa = textoTarefa.value;
    textoTarefa.value = "";
    let lista = document.getElementById("lista-tarefas");
    let itemLista = document.createElement("li");
    itemLista.innerHTML = novaTarefa;
    itemLista.className = "tarefa-na-lista";
    lista.appendChild(itemLista);
    itemLista.addEventListener("click", function () {
    itemLista.style.backgroundColor = "rgb(128, 128, 128)";
    })
    }
});


