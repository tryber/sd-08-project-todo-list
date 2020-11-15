function taskList(){
    let addButton = document.getElementById("criar-tarefa");
    addButton.addEventListener("click", taskCreator);

    function taskCreator(){
        let task = document.querySelector("#texto-tarefa");
        let orderedTask = document.querySelector("#lista-tarefas");
        let listTask = document.createElement("li");
        orderedTask.appendChild(listTask);
        listTask.innerText = task.value;
        task.value = "";
        listTask.addEventListener("click" , colorChanging);
        listTask.addEventListener("dbclick", completeTask);
       
    }
}
taskList();

function colorChanging(event){
    let listItem = document.querySelectorAll("li");
    for (let index = 0; index < listItem.length; index += 1){
        listItem[index].style.backgroundColor = "";
    }
    event.target.style.backgroundColor = "rgb(128,128,128)";
}

function completeTask(event){
    let taskIndex = event.target;
    if (taskIndex.classList.contains("completed")){
        event.target.classList.remove("completed");
    } else {
        taskIndex.classList.add("completed");
    }
}
      
    






