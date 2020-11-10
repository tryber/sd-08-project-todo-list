// CRIANDO BOTÃO PARA ADCIONAR TAREFA A LISTA
document.querySelector('#criar-tarefa').addEventListener('click', function(){
    let listElement = document.createElement('li');
    document.querySelector('#lista-tarefas').appendChild(listElement);
    listElement.innerHTML = document.querySelector('#texto-tarefa').value;
    document.querySelector('#texto-tarefa').value = '';
    changeBackColor();        
    deleteAllTasks();
    removeFinishedTask();
    textDecoration();    
});


    

//MUDAR COR DE FUNDO
function changeBackColor(){
    for(let index = 0; index < document.querySelectorAll('li').length; index+=1) {
        document.querySelectorAll('li')[index].addEventListener('click', function (event){
            for (let index2 = 0; index2 < document.querySelectorAll('li').length; index2 +=1) {
                document.querySelectorAll('li')[index2].style.background = '';                    
            }
            event.target.style.background = 'rgb(128,128,128)';
        });        
    }
}


// COLOCANDO DECORAÇAO NA TAREFA QUE JÁ FOI EXECUTADA
function textDecoration() {
    for(let index = 0; index < document.querySelectorAll('li').length; index+=1) {
        document.querySelectorAll('li')[index].addEventListener('dblclick', function (event){
            if (event.target.classList.contains('completed')) {
                event.target.classList.remove('completed')
            } else {
                event.target.classList.add('completed');
            }                                       
        });        
    }
}
    


// BOTAO APAGA TUDO
function deleteAllTasks() {
    document.querySelector('#apaga-tudo').addEventListener('click', function(){
        for (let index = 0; index < document.querySelectorAll('li').length; index+=1) {
            document.querySelector('#lista-tarefas').removeChild(document.querySelectorAll('li')[index]);
        }
    });    
}



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




    

