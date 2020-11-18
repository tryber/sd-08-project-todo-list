window.onload = function () {
  if (localStorage.getItem("task-names") != null) {
    let loadText = JSON.parse(localStorage.getItem("task-names"));
    let loadClasses = JSON.parse(localStorage.getItem("task-classes"));
    for (let i = 0; i < loadText.length; i += 1) {
        let printList = document.createElement('li');
        printList.innerHTML = loadText[i];
        printList.className = loadClasses[i];
        document.getElementById('lista-tarefas').appendChild(printList);
    };
};
}

document.addEventListener('click', function (event) {
    let selected = document.getElementsByClassName('selected')[0];
    if (event.target.id === 'criar-tarefa') {
        const list = document.getElementById('lista-tarefas');
        let taskText = document.getElementById('texto-tarefa');
        if (taskText.value != '') {
            let createList = document.createElement('li');
            createList.className = 'task';
            createList.innerHTML = taskText.value;
            list.appendChild(createList);
            taskText.value = '';
        };
    } else if (event.target.classList.contains('task')) {
        let removeSelect = document.getElementsByClassName('selected');
        for (let i = 0; i < removeSelect.length; i += 1) {
            removeSelect[i].classList.remove('selected');
        };
        event.target.classList.add('selected');
    } else if (event.target.id === 'apaga-tudo') {
        document.getElementById('lista-tarefas').innerHTML = '';
    } else if (event.target.id === 'remover-selecionado') {
        if (document.querySelector('.selected') != null) {
            document.querySelector('.selected').remove();
        };     
    } else if (event.target.id === 'remover-finalizados') {
        let removeCompleted = document.getElementsByClassName('completed');
        for (let j = 0; j < removeCompleted.length; j = 0) {
            removeCompleted[0].remove();
        };
    } else if (event.target.id === 'mover-cima' && selected != null) {
        let previousSibling = selected.previousSibling;
        document.getElementById('lista-tarefas').insertBefore(selected, previousSibling);
    } else if (event.target.id === 'mover-baixo' && selected != null) {
        let nextSibling = selected.nextSibling;
        if (nextSibling != null) {
            document.getElementById('lista-tarefas').insertBefore(nextSibling, selected);
        };
    } else if (event.target.id === 'salvar-tarefas') {
        let saveText = [];
        let saveClass = [];
        let listaSalvar = document.getElementsByClassName('task');
        for (let i = 0; i < listaSalvar.length; i += 1) {
            saveText[i] = listaSalvar[i].innerHTML;
            saveClass[i] = listaSalvar[i].classList.value;
        };
        localStorage.setItem("task-names", JSON.stringify(saveText));
        localStorage.setItem("task-classes", JSON.stringify(saveClass));
    }
}, false);

document.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else if (event.target.classList.contains('task')) {
        event.target.classList.add('completed');
    };
}, false);

// Fonte do código abaixo: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key#Example
// Pesquisei esse código abaixo para conseguir adicionar itens na lista apertando a tecla "Enter".
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.code) {
      case "Enter":
        document.getElementById('criar-tarefa').click();
        break;
    default:
        return; // Quit when this doesn't handle the key event.      
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
