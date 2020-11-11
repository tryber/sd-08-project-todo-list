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
            li.className= 'listItem'
            listTasks.appendChild(li);
            document.getElementById('texto-tarefa').value= '';
        }
    });
}

addTasks();

// Requisito 07

function changeColor(){
    let listItem = document.querySelectorAll('#lista-tarefas');
    for (let index =0; index < listItem.length; index+=1){
        listItem[index].addEventListener('click', function(event){  
            event.target.style.backgroundColor = 'rgb(128, 128, 128)'
        });
    }
}

changeColor();