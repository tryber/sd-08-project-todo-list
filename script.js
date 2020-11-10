document.getElementById("criar-tarefa").addEventListener("click", () => {
  let textoDaTarefa = document.getElementById("texto-tarefa"),
    listaOrdenada = document.getElementById("lista-tarefas"),
    itemDaLista = document.createElement("li");
  itemDaLista.innerHTML = textoDaTarefa.value;
  listaOrdenada.appendChild(itemDaLista);
  textoDaTarefa.value = "";
});

document.getElementById("lista-tarefas").addEventListener("click", () => {
  let object = document.querySelectorAll("li");
  for (let index = 0; index < object.length; index += 1) {
    object[index].style.backgroundColor = "white";
  }
  event.target.style.backgroundColor = "rgb(128,128,128)";
});
