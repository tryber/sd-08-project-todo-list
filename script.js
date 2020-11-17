function criarTarefa() {
    let addButton = document.getElementById("criar-tarefa");
    addButton.addEventListener("click", taskCreator);

    function taskCreator(){
        let task = document.querySelector("#texto-tarefa");
        let orderedTask = document.querySelector("#lista-tarefas");
        let listTask = document.createElement("li");
        listTask.innerText = task.value;
        orderedTask.appendChild(listTask);
        task.value = "";
    }
}
criarTarefa();