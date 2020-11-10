// CRIANDO BOTÃO PARA ADCIONAR TAREFA A LISTA
document.querySelector('#criar-tarefa').addEventListener('click', function(){
    let listElement = document.createElement('li');
    document.querySelector('#lista-tarefas').appendChild(listElement);
    listElement.innerHTML = document.querySelector('#texto-tarefa').value;
    document.querySelector('#texto-tarefa').value = '';
    changeBackColor();   
});

//MUDAR COR DE FUNDO
function changeBackColor(){
    for(let index = 0; index < document.querySelectorAll('li').length; index+=1) {
        document.querySelectorAll('li')[index].addEventListener('click', function (event){
            event.target.style.background = 'rgb(128,128,128)';
        });
    }
}

