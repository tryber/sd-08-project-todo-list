const addBtn = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearAllBtn = document.getElementById('apaga-tudo');
const clearSelBtn = document.getElementById('remover-selecionado');
const clearComBtn = document.getElementById('remover-finalizados');

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

clearAllBtn.addEventListener('click', function(){
    let allTasks = document.getElementsByTagName('li');
    Array.from(allTasks).forEach((value) => 
        value.remove());

    
});
//test uso de =>
// array.from https://www.w3schools.com/jsref/jsref_from.asp


//Foi necessário criar um event para assim poder usar as propriedades de .target
//https://www.w3schools.com/jsref/dom_obj_event.asp
//uso do togle pra nao fazer um if, se o elemento no parametro nao existir ele adiciona porém o contrário ele retira.
//https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
//Lembrando que completed esta sendo adicionado em classList então no CSS deve ser puxado com .completed
taskList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
});

//foreach aprendi hoje 30\11
clearComBtn.addEventListener('click',function(){
        let completeList = document.getElementsByClassName('completed');
        for (let pos = 0; pos<completeList.length; pos++){
            li = completeList[pos];
            taskList.removeChild(li);
        }
    });
