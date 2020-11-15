function taskList(){
    let addButton = document.getElementById("criar-tarefa");
    addButton.addEventListener.EventListener("click", taskCreator)

    function taskCreator(){
        let task = document.querySelector("#texto-tarefa");
        let orderedTask = document.querySelector("#lista-tarefas");
        let listTask = document.createElement("li");
        orderedTask.appendChild(listTask);
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