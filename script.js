//create list of tasks
function createTasks() {
  let button = document.getElementById("criar-tarefa");
  button.addEventListener("click", function () {
    let boxText = document.getElementById("texto-tarefa");
    let list = document.getElementById("lista-tarefas");
    let listChilds = document.createElement("li");
    listChilds.className = "list-ordened";
    list.appendChild(listChilds);
    let newText = boxText.value;
    listChilds.innerText = newText;
    boxText.value = "";
  });
}
createTasks();

