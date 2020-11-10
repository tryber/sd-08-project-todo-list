window.onload = function () {

    // Lista de objetos
    const txtTask = document.getElementById('texto-tarefa');
    const btnCreateTask = document.getElementById('criar-tarefa');
    const btnClearTasksList = document.getElementById('apaga-tudo');
    const btnRemoveTaskCompleted = document.getElementById('remover-finalizados');
    const btnSaveTasksList = document.getElementById('salvar-tarefas');
    const btnMoveUpTask = document.getElementById('mover-cima');
    const btnMoveBottomTask = document.getElementById('mover-baixo');
    const olTasksList = document.getElementById('lista-tarefas');
    const listTasks = document.querySelector('.task-list');

    // Lista de eventos de objetos
    txtTask.addEventListener('keyup', checkEnterEvent);
    btnCreateTask.addEventListener('click', createTask);
    btnClearTasksList.addEventListener('click', clearListTasks);
    btnRemoveTaskCompleted.addEventListener('click', removeTaskCompleted);
    btnSaveTasksList.addEventListener('click', saveTaskList);
    btnMoveUpTask.addEventListener('click', moveUpTask);
    btnMoveBottomTask.addEventListener('click', moveBottomTask);
    olTasksList.addEventListener('click', setBackGroundColor);
    olTasksList.addEventListener('dblclick', setTaskCompleted);

    // Funções dos eventos dos objetos
    function moveUpTask(event) {        
        const childNode = document.querySelectorAll('.task');            
        for (let index = 0; index < childNode.length; index += 1) {
            if (childNode[index].classList.contains('selected')) {
                childNode[index].parentElement.insertBefore(childNode[index], childNode[index - 1]);
            }
        }
    }

    function moveBottomTask(event) {
        const childNode = document.querySelectorAll('.task');
        for (let index = 0; index < childNode.length; index += 1) {
            if (childNode[index].classList.contains('selected')) {
            if (index + 1 < childNode.length) {
                childNode[index + 1].parentElement.insertBefore(childNode[index + 1], childNode[index]);
                }
            }
        }
    }

    function saveTaskList() {
        localStorage.clear();
        localStorage.setItem('List', listTasks.innerHTML);
    }

    loadLocalStorageItems();

    function loadLocalStorageItems() {
        if(localStorage.length > 0) {
            listTasks.innerHTML = localStorage.getItem('List');
        }
      }

    function setBackGroundColor(event) {    
        if (document.querySelector('.selected') !== null){
            document.querySelector('.selected').style.backgroundColor = '';
            document.querySelector('.selected').classList.remove('selected');
        }
        event.target.classList.add('selected');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';       
    }

    function setTaskCompleted(event) {
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
        event.target.classList.add('completed');
        }      
    }

    function removeTaskCompleted() {
        for (let index = 0; index < olTasksList.childElementCount; index += 1) {
            const task = olTasksList.children[index];
            if (task.classList.contains('completed')) {
                olTasksList.removeChild(task);
                index -= 1;
            }
        }
    }

    function checkEnterEvent(event) {
        if (event.type === 'keyup')
        {
            if (event.keyCode === 13) {
                event.preventDefault();
                btnCreateTask.click();
            }
        }
    }

    function createTask() {
        if (txtTask.value == '') {
            alert('Digite uma tarefa');
        }
        else {
            let listTasks = document.querySelector('.task-list');
            let liTask = document.createElement('li');
            
            liTask.className = "task";
            liTask.innerHTML = txtTask.value;
            listTasks.appendChild(liTask);

            txtTask.value = '';
        }
    }

    function clearListTasks() {    
        let listTasks = document.getElementById('lista-tarefas');
        listTasks.innerHTML = '';
    }
}