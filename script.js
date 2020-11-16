function addTask(){
    let inputText=document.querySelector('#texto-tarefa');
    let taskList= document.querySelector('#lista-tarefa');
    let taskButton=document.querySelector('#criar-tarefa');

    taskButton.addEventListener('click',function(){
        let taskElement=document.createElement('li');
        taskElement.innerHTML=inputText.value;
        taskList.appendChild(taskElement);
        taskList.next;
        inputText.value='';
    })
}