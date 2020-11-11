// Requisito 05

const listTasks = document.querySelector('#lista-tarefas');
let button = document.querySelector('#criar-tarefa')

function addTasks (){
    button.addEventListener('click', function(){
        let inputTasks = document.getElementById('texto-tarefa').value;
        if (inputTasks == '' || null){
            alert('Digite uma tarefa');
        }else{
            let li = document.createElement('li');
            li.innerText = inputTasks;
            listTasks.appendChild(li);
            document.getElementById('texto-tarefa').value= '';
        }
    });
}

addTasks();
