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
document.getElementById("lista-tarefas").addEventListener("dblclick", () => {
  if (event.target.className == "completed") {
    event.target.className = "";
  } else {
    event.target.className = "completed";
  }
});
document.getElementById("apaga-tudo").addEventListener("click", () => {
  let item = document.querySelectorAll("li");
  for (let i = 0; i < item.length; i += 1) {
    document.getElementById("lista-tarefas").removeChild(item[i]);
  }
});
document.getElementById("remover-finalizados").addEventListener("click", () => {
  let item = document.querySelector(".completed");
  document.getElementById("lista-tarefas").removeChild(item);
});
