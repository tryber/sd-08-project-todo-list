//reqs 5 e 6

let orderedList = document.getElementById("lista-tarefas");
let textInput = document.getElementById("texto-tarefa");
let buttonParent = document.getElementById("btn-section");

buttonParent.addEventListener("click", function () {
  let userInput = textInput.value;
  let listItem = document.createElement("li");
  listItem.className = "items";
  listItem.innerText = userInput;
  orderedList.appendChild(listItem);

  textInput.value = "";
}
);


//reqs 7 e 8

let allItems = document.getElementsByClassName("items");

orderedList.addEventListener("click", function () {
  for (index = 0; index < allItems.length; index += 1) {
    allItems[index].style.backgroundColor = "white";
  }
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
})

//req 9

//req 10

eraseSection = document.getElementById("btn-apagar");

eraseSection.addEventListener("click", function () {
  orderedList.innerHTML = "";
  // for (index = 0; index < allItems.length; index += 1) {
  //   allItems[index].innerHTML = "";
  // }
})

//req 11

//req 12
