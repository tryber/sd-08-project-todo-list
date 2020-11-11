const listaTarefa = document.createElement("ol");

// criar li dinamicamente
window.onload = function () {
  document.body.appendChild(listaTarefa);
  listaTarefa.id = "lista-tarefas";
};

function addTask() {
  let novaTarefa = document.createElement("li");
  novaTarefa.innerText = document.getElementById("texto-tarefa").value;
  novaTarefa.id = "tarefa";
  listaTarefa.appendChild(novaTarefa);
  document.getElementById("texto-tarefa").value = "";
}

addEventListener("click", function (event) {
  let y = event.target;
  if (y.id == "tarefa") {
    y.style.backgroundColor = "rgb(128,128,128)";
  }
});

addEventListener("click", function (event) {
  let y = event.target;
  if (y.id == "apaga-tudo") {
    let li = document.getElementById("lista-tarefas");
    li.parentNode.removeChild(li);
  }
});

// dblclick no li faz text-decoration line-through solid rgb (0,0,0)
