document.getElementById("criar-tarefa").addEventListener("click", () => {
  let textoDaTarefa = document.getElementById("texto-tarefa"),
    listaOrdenada = document.getElementById("lista-tarefas"),
    itemDaLista = document.createElement("li");
    itemDaLista.innerHTML = textoDaTarefa.value;
    listaOrdenada.appendChild(itemDaLista)
    textoDaTarefa.value = ''
});

