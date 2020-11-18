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
        listTask.addEventListener("click", colorChanging);
        //orderedTask.addEventListener("dbclick", doubleClickToComplete);
    }  
}
taskList();

function colorChanging(event){
    let taskItem = document.querySelectorAll("li");
    for (let index = 0; index < taskItem.length; index += 1){
        taskItem[index].style.backgroundColor = "";
        event.target.style.backgroundColor = "rgb(128,128,128)"
    }
}
colorChanging();

function doubleClickToComplete() {
    let taskDone = document.querySelector("#lista-tarefas");
    taskDone.addEventListener("dblclick", function(event) {
        if (event.target.classList.contains("completed")){
            event.target.classList.remove("completed");
        } else {
            event.target.classList.add("completed");
        }
    });
    
}
doubleClickToComplete();


  








































































      
    






