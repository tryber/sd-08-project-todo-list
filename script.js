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
            li.className = 'task'
            //li.className= 'listItem'
            listTasks.appendChild(li);
            document.getElementById('texto-tarefa').value= '';
        }
    });
}

addTasks();

// Requisito 07 08
let listItem = document.querySelectorAll('#lista-tarefas');
function changeColor(){
    
    for (let index =0; index < listItem.length; index +=1){
        listItem[index].addEventListener('click', function(event){
            let classSelect = document.querySelectorAll('.selected');
            for (let x =0 ; x < classSelect.length; x +=1){
                classSelect[x].classList.remove('selected')
            }
            event.target.classList.add('selected');
        });

    }
}

changeColor();

// Requisito 09

function scratchItem (){
    for (let index = 0; index < listItem.length; index +=1){
        listItem[index].addEventListener('dblclick', function(event){

            if (event.target.classList.contains('completed')){
                event.target.classList.remove('completed');
            }else{
                event.target.classList.add('completed');
            }
            
        });
    }
}

scratchItem();

// Requisito 10

function clearList (){
    let button = document.querySelector('#apaga-tudo');
    let li = document.getElementsByName('li');

    button.addEventListener('click', function(event){
        let task = document.querySelectorAll('.task')
     for (let x =0; x < task.length; x+=1){
        task[x].remove();
     }
        
    });
}

clearList()

// Requisito 11

function removefinished(){
    let button = document.querySelector('#remover-finalizados');
    button.addEventListener('click', function(event){
        let finalizados = document.querySelectorAll('.completed');
        for (let x = 0; x < finalizados.length; x+=1){
            finalizados[x].remove()
        }
       });
}

removefinished();