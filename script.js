const addBtn = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearBtn = document.getElementById('apaga-tudo');

addBtn.addEventListener('click',function(){
    const taskItem = document.createElement('li');
    
    taskList.appendChild(taskItem);
    taskItem.innerHTML = textInput.value;
    taskItem.className = 'taskClass';
    textInput.value ="";
});
// Pra registro , o melhor é chamar as tags antes e nomear elas no js
// textImput seria considerado como null e por isso é necessário chamar-lo com .value:"" para dar uma string a ele.
// addevent listener não é necessário estar dentro de um window.on

clearBtn.addEventListener('click', function(){
    let allTasks = document.getElementsByTagName('li');
    Array.from(allTasks).forEach((value) => 
        value.remove());

    
});
//test uso de =>
// array.from https://www.w3schools.com/jsref/jsref_from.asp