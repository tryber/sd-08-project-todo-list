function taskList(){
    let addButton = document.getElementById("criar-tarefa");
    addButton.addEventListener.EventListener("click", taskCreator)

    function taskCreator(){
        let task = document.getElementById("texto-tarefa");
        let orderedTask = document.getElementById("lista-tarefas");
        let listTask = document.createElement("li");
        orderedTask.appendChild(listask);
        listTask.innerHTML = task.value;
        task.value = "";
    }
}
taskList();

      
    






/*function createTask(){
    let tasks = document.getElementById("lista-tarefas");
    let list = document.createElement("li");
    task.appendChild(list);
}
createTask();*/