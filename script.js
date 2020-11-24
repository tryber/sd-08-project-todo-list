var addButton = document.getElementById("criar-tarefa");
addButton.addEventListener('click', addToDoItem);
function addToDoItem(){
  alert("Tarefa criada com sucesso!");
}

var clearButton = document.getElementById("remover-finalizados");
  clearButton.addEventListener('click', clearCompletedToDoItems);
function clearCompletedToDoItems(){
  alert("Tarefa removida com sucesso!");
}

var emptyButton = document.getElementById("apaga-tudo");
emptyButton.addEventListener('click', emptyList);
function emptyList(){
  alert("Apagado com sucesso!");
}

var saveListButton = document.getElementById("salvar-tarefas");
saveListButton.addEventListener('click', saveList);
function saveList() {
    var toDos = [];

    for (var index = 0; index < toDoList.children.length; index++) {
        var toDo = toDoList.children.item(index);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}

var todoEntryBox = document.getElementById("texto-tarefa");
var toDoList = document.getElementById("lista-tarefas");
function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li")
    var toDoText = document.createTextNode(itemText)
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }
  
    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

var toDoEntryBox = document.getElementById("texto-tarefa");
function addToDoItem() { 
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
    toDoEntryBox.value= "";
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}
loadList();