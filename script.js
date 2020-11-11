function createList(){
    let button = document.getElementById('criar-tarefa');
    let ol = document.getElementById('lista-tarefas');
    let input = document.getElementById('texto-tarefa');
    button.addEventListener('click', function () {
        let li = document.createElement('li')
        li.innerText += input.value;
        ol.appendChild(li);
        input.value = '';
    })
}
createList();

function tintList(){
    let ol = document.getElementById('lista-tarefas');
    ol.addEventListener('click', function(e){   
        e.target.style.backgroundColor = 'rgb(128,128,128)';  
    })
}
tintList();

/*function selected(){
    let ol = document.getElementById('lista-tarefas');
    ol.addEventListener('click', function(e){
        for(let index = 0; index < ol.length; index +=1){
            if(e.target.style.backgroundColor == 'rgb(128,128,128'){
                ol.style.backgroundColor = '';
            }else{
                e.target.style.backgroundColor = 'rgb(128,128,128)';
            }
        }
    })
}
selected();*/

function doneTask(){
    let ol = document.getElementById('lista-tarefas');
    ol.addEventListener('dblclick', function(e){
        if(e.target.className == 'completed'){
            e.target.classList.remove('completed');
        }else {
            e.target.classList.add('completed');
        }
    })
}

doneTask();

