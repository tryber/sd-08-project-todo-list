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
    listChilds.addEventListener("click",changeColor);
    });
  }
createTasks();

function changeColor(event){
    listItem = document.querySelectorAll("li");
    for(let i=0;i < listItem.length; i+=1){
        listItem[i].style.backgroundColor = "";
    }
    event.target.style.backgroundColor = "rgb(128,128,128)";
}


