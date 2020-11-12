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
    listChilds.addEventListener("click",function(){
        listChilds.style.backgroundColor = "rgb(128, 128, 128)";
    });
  });
}
createTasks();

