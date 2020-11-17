let addTaskButton = document.querySelector('#criar-tarefa')
let taskInput = document.querySelector('#texto-tarefa')
let taskList = document.querySelector('#lista-tarefas')
let lastSelectedElement = null

addTaskButton.addEventListener("clik", createTask)

function createTask() {
    let listItem = document.createElement('li')
    listItem.innerText = taskInput.value
    listItem.addEventListener("clik", setSelectedColor)
    taskList.appendChild(listItem)
    taskInput.value = ""

}

function setSelectedColor(event) {
    if (lastSelectedElement !== null || lastSelectedElement === event) {
        lastSelectedElement.style.backgroundColor = "white"
    }
    latsSelectedElement = event.target
    event.target.style.backgroundColor = "rgb(128, 128, 128)"

}