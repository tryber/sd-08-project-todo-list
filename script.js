let orderedList = document.getElementById("lista-tarefas");
let textInput = document.getElementById("texto-tarefa");
let buttonParent = document.getElementById("btn-section");

buttonParent.addEventListener("click", function () {
  let userInput = textInput.value;
  let listItem = document.createElement("li");
  listItem.className = "items";
  listItem.innerText = userInput;
  orderedList.appendChild(listItem);

  }
);
