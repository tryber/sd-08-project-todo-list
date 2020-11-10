window.onload = function () {
    function changeColor() {

    }
    changeColor()

}

function createButton() {
    let buttonPosition = document.querySelector("#texto-tarefa");
    let createButton = document.createElement("button");
    createButton.innerText = 'Adicionar'
    createButton.setAttribute('id', 'criar-tarefa')
    buttonPosition.insertAdjacentElement('afterend', createButton);
}
createButton()

function addTaskToList() {
    //let taskInput = document.getElementById('texto-tarefa');
    let addTaskButton = document.getElementById('criar-tarefa');
    addTaskButton.addEventListener('click', addTask)
    // taskInput.addEventListener("keyup", addTask(event))
    function addTask(event) {
        if (event.code == "Enter" || event.button === 0) {
            let taskInput = document.getElementById('texto-tarefa');
            let taskDescription = taskInput.value
            let taskList = document.getElementById('lista-tarefas');
            let createTask = document.createElement('li')
            if (taskDescription != "") {
                createTask.innerText = taskDescription
                createTask.className = 'task'
                createTask.style.backgroundColor = "rgb(255, 255, 255)"

                createTask.addEventListener("click", function (event) {
                    let currentBackgroundColor = "rgb(255, 255, 255)"
                    if (currentBackgroundColor = "rgb(255, 255, 255)") {
                        let previousSelectedElement = document.querySelector(".selected")
                        if (previousSelectedElement) {
                            previousSelectedElement.style.backgroundColor = "rgb(255, 255, 255)"
                            previousSelectedElement.classList.remove("selected")
                        }
                        event.target.style.backgroundColor = "rgb(128 ,128 ,128)"
                        event.target.classList.add("selected")
                    }
                })

                taskList.appendChild(createTask)
                taskInput.value = ""
            } else (alert("Adicione um nome para tarefa!"))
        }

    }
}
addTaskToList()