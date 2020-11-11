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
  let x = document.querySelectorAll("li");
  for (let i = 0; i < x.length; i += 1) {
    if (x[i].style.backgroundColor == "rgb(128,128,128)") {
      x[i].style.backgroundColor == "rgb(255,255,255)";
    }
  }
});

addEventListener("click", function (event) {
  let y = event.target;
  if (y.id == "tarefa") {
    y.style.backgroundColor = "rgb(128,128,128)";
  }
});

addEventListener("click", function (event) {
  let y = event.target;
  if (y.id == "apaga-tudo") { 
  let li = document.getElementById('lista-tarefas');     
   li.parentNode.removeChild(li);
    }     

});



// dblclick no li faz text-decoration line-through solid rgb (0,0,0)
