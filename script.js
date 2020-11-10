// Botão para add tarefa
let buttonCriar = document.getElementById("criar-tarefa");
let lista = document.getElementById("lista-tarefas");
buttonCriar.addEventListener("click", function () {
  let text = document.getElementById("texto-tarefa");
  let itemLista = document.createElement("li");
  itemLista.innerHTML = text.value;
  lista.appendChild(itemLista);
  text.value = "";
});

// Selecionar item na lista
let listItem = document.getElementsByTagName("li");
lista.addEventListener("click", function () {
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener("click", function (event) {
      for (let i = 0; i < listItem.length; i += 1) {
          if (listItem[i].className === "selected completed") {
              listItem[i].className = "completed"
          } else if (listItem[i].className === "selected") {
              listItem[i].className = "";
          }
      } 
      event.target.className = "selected";
    });
  }
});

// Indicar item completo
lista.addEventListener("dblclick", function (event) {
  if (event.target.className === "selected") {
    event.target.className = "selected completed";
  } else {
    event.target.className = "selected";
  }
});

// Botão de apagar tudo
let buttonApagarTudo = document.getElementById("apaga-tudo");
buttonApagarTudo.addEventListener("click", function () {
    lista.innerHTML = "";
})

// Botão de apagar concluídos
let buttonApagarConcluido = document.getElementById("remover-finalizados");
buttonApagarConcluido.addEventListener("click", function () {
    let listaConcluido = document.getElementsByClassName("completed");
    for (let j = 0; j < listaConcluido.length; j += 1) {
        listaConcluido[j].remove();
    }
})