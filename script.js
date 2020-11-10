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

orderedList.addEventListener("click", function (event) {
  for (index = 0; index < allItems.length; index += 1) {
    allItems[index].style.backgroundColor = "white";
  }
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
});

//req 9

orderedList.addEventListener("dblclick", function (event){
  if (event.target.className == "items completed") {
    event.target.className = "items";
  } else {
    event.target.className = "items completed";
  }
});

//req 10

eraseSection = document.getElementById("btn-apagar");

eraseSection.addEventListener("click", function () {
  orderedList.innerHTML = "";
  // for (index = 0; index < allItems.length; index += 1) {
  //   allItems[index].innerHTML = "";
  // }
})

//req 11
let removeCompleteButton = document.getElementById("apagar-completo");

removeCompleteButton.addEventListener("click", function () {
  let completeItems = document.querySelectorAll(".completed");
  for (index = 0; index < completeItems.length; index += 1) {
    completeItems[index].remove();
  }
});

//req 12
