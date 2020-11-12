window.onload = function() {
    let nameTask;
    let arrayTask;
    let nameClass;
    let arrayClass;
    nameTask = localStorage.getItem('task');
    nameClass = localStorage.getItem('class');

    if (nameTask !== null && nameClass !== null) {
        arrayTask = nameTask.split(',');
        arrayClass = nameClass.split(',');
        for (index = 0; index < arrayTask.length; index += 1) {
            const li = document.createElement('li');
            const ol = document.querySelector('#lista-tarefas');
            li.innerText = arrayTask[index];
            li.className = arrayClass[index];
    
            ol.appendChild(li);
        }
    }
}

function addTask() {
    const input = document.querySelector('#texto-tarefa');
    const botao = document.querySelector('#criar-tarefa');

    botao.addEventListener('click', function() {
      let textoDigitado = input.value;
      const ol = document.querySelector('#lista-tarefas');
      const li = document.createElement('li');

      li.innerHTML = textoDigitado;
      li.className = 'task';

      ol.appendChild(li);

      input.value = '';
    });
}

addTask();

function colorTask() {
    const ol = document.querySelector('#lista-tarefas');

    ol.addEventListener('click', function(event) {
    const li = document.querySelectorAll('.task');
      if (event.target.className === 'task' || event.target.className === 'task completed') {
        for (let index = 0; index < li.length; index += 1){
            li[index].style.backgroundColor = 'white';
        }
        event.target.style.backgroundColor = 'grey';
      }
    });
}

colorTask();

function completedTask() {
    const ol = document.querySelector('#lista-tarefas');

    ol.addEventListener('dblclick', function(event) {
      if (event.target.className === 'task') {
        event.target.className = event.target.className + ' ' + 'completed';
      } else {
        event.target.className = 'task';
      }
    });
}

completedTask();

function removeTask() {
    const ol = document.querySelector('#lista-tarefas');
    const button = document.querySelector('#apaga-tudo');

    button.addEventListener('click', function() {
        const li = document.querySelectorAll('.task');
        for (let index = 0; index < li.length; index += 1) {
            ol.removeChild(li[index]);
        }
    });
}

removeTask();

function removeCompletedTask() {
    const ol = document.querySelector('#lista-tarefas');
    const button = document.querySelector('#remover-finalizados');

    button.addEventListener('click', function() {
        const li = document.querySelectorAll('.completed');
        for (let index = 0; index < li.length; index += 1) {
            ol.removeChild(li[index]);
        }
    });
}

removeCompletedTask();

function saveTasks() {
    const button = document.querySelector('#salvar-tarefas');

    button.addEventListener('click', function() {
        const li = document.querySelectorAll('.task');
        let nameTask = [];
        let nameClass = [];

        for (let index = 0; index < li.length; index += 1) {
            nameTask[index] = li[index].innerText;
            nameClass[index] = li[index].className;
        }
        localStorage.setItem('task', nameTask);
        localStorage.setItem('class', nameClass);
    });
}

saveTasks();

function moveUp() {
    const button = document.querySelector('#mover-cima');
    let liText;
    let liClass;

    button.addEventListener('click', function(event) {
        let li = document.querySelectorAll('.task');
        let position = 0;
        for (index = 0; index < li.length; index += 1) {
            if (li[index].style.backgroundColor === 'grey') {
                position = index;
            }
        }
        if (position !== 0) {
           liText = li[position].innerText;
           liClass = li[position].className;

           li[position].innerText = li[position -1].innerText;
           li[position].className = li[position -1].className;
           li[position].style.backgroundColor = 'white';

           li[position - 1].innerText = liText;
           li[position - 1].className = liClass;
           li[position - 1].style.backgroundColor = 'grey';
        }
    });
}

moveUp();

function moveDown() {
    const button = document.querySelector('#mover-baixo');
    let liText;
    let liClass;

    button.addEventListener('click', function(event) {
        let li = document.querySelectorAll('.task');
        let position = li.length - 1;
        for (index = 0; index < li.length; index += 1) {
            if (li[index].style.backgroundColor === 'grey') {
                position = index;
            }
        }
        if (position !== null) {
            if (position !== li.length - 1) {
                liText = li[position].innerText;
                liClass = li[position].className;
     
                li[position].innerText = li[position + 1].innerText;
                li[position].className = li[position + 1].className;
                li[position].style.backgroundColor = 'white';
     
                li[position + 1].innerText = liText;
                li[position + 1].className = liClass;
                li[position + 1].style.backgroundColor = 'grey';
             }
        }
    });
}

moveDown();
