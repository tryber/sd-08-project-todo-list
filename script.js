//Recebe uma valor no campo de texto e cria uma tarefa.
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

//Adiciona evento que ao clicar em um item da lista, colore o fundo do alvo clicado.
function tintList(){
    let ol = document.getElementById('lista-tarefas');
    ol.addEventListener('click', function(e){   
        e.target.style.backgroundColor = 'rgb(128,128,128)';  
    })
}
tintList();

//Adiciona evento que permite selecionar somente uma tarefa.
let ol = document.getElementById('lista-tarefas');
function selected(event) {
    let li = document.getElementsByTagName('li');
    for(let index = 0; index < li.length; index +=1){
        li[index].removeAttribute('style');
    }
    console.log('bruno')
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
ol.addEventListener('click', selected);


//Adiciona evento que ao clicar duas vezes, risca a tarefa indicando que está completa, também faz o processo reverso.
//O conteúdo utilizado para resolver a questão foi retirado do site :https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
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

//Adiciona funcionalidade a um botão que remove todos os elementos da lista.
//Os conteúdos usados para esse exercício foram aprendidos no seguinte site : https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild 
function removeList(){
    let button = document.getElementById('apaga-tudo');
    var elementsOl = document.getElementById('lista-tarefas');
    while (elementsOl.firstChild){
        elementsOl.removeChild(elementsOl.firstChild)
    }
    button.addEventListener('click', removeList);
}

removeList();

//Adiciona evento que apaga todas as tarefas concluídas.
let btnCompleted = document.getElementById('remover-finalizados');
function removeCompleted() {
    let completed = document.querySelectorAll('.completed')
    for(let index = 0; index < completed.length; index +=1){
        completed[index].remove();
    }
}
btnCompleted.addEventListener('click', removeCompleted);
