window.onload = function () {
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
                let taskInput = document.getElementById('texto-tarefa').value;
                let taskList = document.getElementById('lista-tarefas');
                let createTask = document.createElement('li')
                createTask.innerText = taskInput
                taskList.appendChild(createTask)
            }
        }
    }
    addTaskToList()
}
