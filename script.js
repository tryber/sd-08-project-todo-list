const addButton = document.querySelector('#criar-tarefa'); //botao
const inputText = document.querySelector('#texto-tarefa');//onde digita o texto
const taskList = document.querySelector('#lista-tarefas');//ol
let liSelected = null;
const removeButton = document.querySelector('#apaga-tudo');
const btnRemoveCompletedTask = document.querySelector('#remover-finalizados');

addButton.addEventListener('click', sendText);

function sendText () {
    let textList =  document.createElement('li');
    textList.innerText = inputText.value;
    textList.addEventListener('click', changeColor);
    textList.addEventListener('dblclick', taskCompleted);
    taskList.appendChild(textList);
    inputText.value = "";
};


function changeColor (event) {
    if (liSelected !== null) {
        liSelected.style.backgroundColor = "white";
    }
        liSelected = event.target;
        event.target.style.backgroundColor = "rgb(128, 128, 128)";   
};

function taskCompleted (event) {
    textList = event.target;
    if(event.target.classList.contains('completed')){
        event.target.classList.remove('completed')
    } else {
        event.target.classList.add('completed');
    }
};

removeButton.addEventListener('click', removeTasks);
function removeTasks () {
   taskList.innerText = '';    
};

btnRemoveCompletedTask.addEventListener('click', removeCompletedTask );
function removeCompletedTask (event) {   
        event = document.querySelectorAll('.completed').forEach(function(a){
            a.remove();
        })       
}



