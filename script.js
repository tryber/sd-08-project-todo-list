//create list of tasks
function createTasks() {
  let button = document.getElementById("criar-tarefa");
  button.addEventListener("click", function () {
    let boxText = document.getElementById("texto-tarefa");
    let listTasks = document.getElementById("lista-tarefas");
    let listChilds = document.createElement("li");
    listTasks.appendChild(listChilds);
    let newText = boxText.value;
    listChilds.innerText = newText;
    boxText.value = "";
    listChilds.addEventListener("click", changeColor);
    listChilds.addEventListener("dblclick",captureInput);
  });
}
createTasks();
//change colors in the list item of tasks
function changeColor(event) {
  listItem = document.querySelectorAll("li");
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].style.backgroundColor = "";
  }
  event.target.style.backgroundColor = "rgb(128,128,128)";
}

//by double clicking on an item where it will be scratched

// function elementScratched() {
//   let itemScratched = document.querySelectorAll("li");
//   itemScratched.addEventListener("dblclick",function(){
//     for(let i=0;i < itemScratched.length; i += 1){
//       itemScratched[i].className ="completed"; 
//       itemScratched[i].style.textDecoration = "line-through solid rgb(0, 0, 0)";
//     }
//   });
// }
// elementScratched();
function captureInput(event){
  event.target.classList.toggle("completed");
}
