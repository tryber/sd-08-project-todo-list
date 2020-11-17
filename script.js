function addTask(){
    let taskList= document.querySelector('#lista-tarefas');
    let taskButton=document.querySelector('#criar-tarefa');

    taskButton.addEventListener('click',function(){
        let inputText=document.querySelector('#texto-tarefa');
        let taskElement=document.createElement('li');
        taskElement.innerHTML=inputText.value;
        taskList.appendChild(taskElement);
        taskList.next;
        inputText.value='';
    })
}

addTask();

function addTaskColor() {
    let taskList = document.querySelector("#lista-tarefas");
    taskList.addEventListener('click', function(event) {
    let chosen = document.querySelector('.chosen');
    if (chosen == null) {
        event.target.classList.add('chosen');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    } else {
        chosen.classList.remove('chosen');
        chosen.style.backgroundColor = '';
        event.target.classList.add('chosen');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    }
    });
}
addTaskColor();