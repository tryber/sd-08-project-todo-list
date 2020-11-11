window.onload = function() {
    loadTasks();
    deleteAllTasks();
    removeFinishedTask();
    
}


// CRIANDO BOTÃO PARA ADCIONAR TAREFA A LISTA
function createLi () {
    document.querySelector('#criar-tarefa').addEventListener('click', function(){
        let listElement = document.createElement('li');
        document.querySelector('#lista-tarefas').appendChild(listElement);
        listElement.innerHTML = document.querySelector('#texto-tarefa').value;
        document.querySelector('#texto-tarefa').value = '';    
        // changeBackColor();   
        // removeFinishedTask(); 
        // moveDown ();           
    });
}
createLi();

//MUDAR COR DE FUNDO
function changeBackColor(){
    document.querySelector('#lista-tarefas').addEventListener('click', function (event){
        for (let index2 = 0; index2 < document.querySelectorAll('li').length; index2 +=1) {
            document.querySelectorAll('li')[index2].classList.remove('selected');                   
        }
            event.target.classList.add('selected');
        });        
        
    }
changeBackColor(); 

// COLOCANDO DECORAÇAO NA TAREFA QUE JÁ FOI EXECUTADA
function textDecoration() {    
    document.querySelector('#lista-tarefas').addEventListener('dblclick', function (event){
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        }
    });       
}
textDecoration(); 

// BOTAO APAGA TUDO
function deleteAllTasks() {
    document.querySelector('#apaga-tudo').addEventListener('click', function(){
        for (let index = 0; index < document.querySelectorAll('li').length; index+=1) {
            document.querySelector('#lista-tarefas').removeChild(document.querySelectorAll('li')[index]);
        }       
    });    
}
deleteAllTasks();

// BOTAO REMOVER TAREFA EXECUTADA
function removeFinishedTask() {
    document.querySelector('#remover-finalizados').addEventListener('click', function (){
        for (let index = 0; index < document.querySelectorAll('li').length; index+=1) {
            if (document.querySelectorAll('li')[index].classList.contains('completed')) {
                document.querySelector('#lista-tarefas').removeChild(document.querySelectorAll('li')[index]);
            }
        }
    });
}
removeFinishedTask();

// SALVAR NO LOCALSTORAGE
function saveTasks (){
    document.querySelector('#salvar-tarefas').addEventListener('click', function (){
        localStorage.clear();        
        localStorage.setItem('list', (document.querySelector('#lista-tarefas').innerHTML));
    });
}
saveTasks ();

// CARREGAR LOCALSTORAGE
function loadTasks(){
    document.querySelector('#lista-tarefas').innerHTML = localStorage.getItem('list')
}


deleteAllTasks();

// SETA PARA CIMA 
function moveUp () {
    document.querySelector('#mover-cima').addEventListener('click', function (){    
        for (let index = 0; index < document.querySelectorAll('li').length; index+=1) {
            if (document.querySelectorAll('li')[index].classList.contains('selected')) {                
                if(index !== 0) {
                    document.querySelector('#lista-tarefas').insertBefore(document.querySelectorAll('li')[index], document.querySelectorAll('li')[index].previousElementSibling);
                }                   
            }
        }                              
    });
}
moveUp();

function moveDown () {
    document.querySelector('#mover-baixo').addEventListener('click', function (){    
        for (let index = 0; index < document.querySelectorAll('li').length; index+=1) {
            if (document.querySelectorAll('li')[index].classList.contains('selected')) {  
                console.log(document.querySelectorAll('li')[index].classList.contains('selected'));              
                if(index !== (document.querySelectorAll('li').length - 1)) {
                    let nextLi = document.querySelectorAll('li')[index+1];
                    document.querySelector('#lista-tarefas').insertBefore(nextLi, document.querySelectorAll('li')[index]);
                }                   
            }
        }                              
    });
}
moveDown ();

function removeSelected() {
    document.querySelector('#remover-selecionado').addEventListener('click', function(){
        document.querySelector('#lista-tarefas').removeChild(document.querySelector('.selected'));
    })
}
removeSelected();
