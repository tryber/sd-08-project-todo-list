const body = document.querySelector('body');

//Carrega a lista de tarefa que foi salva
window.onload = function () {
    let taskList = document.querySelector('#lista-tarefas');
    let taskListToLoad = localStorage.getItem('taskList');
    taskList.innerHTML = taskListToLoad;
    
    let allTaks = document.querySelectorAll('li');

    if(allTaks.length < 1){}
    else{
        for(let i = 0; i < allTaks.length; i+= 1){
            addListenersToListItem(allTaks[i]);
        }
    }
};

//Cria o header e o texto que explica
createBasics();
buttonDeleteAll();
buttonDeleteFinished();
saveTasks();
buttonMoveTask();
buttonRemoveSelected();

function createBasics() {
    //Cria o header
    let header = document.createElement('header');
    header.innerHTML = 'Minha Lista de Tarefas';
    body.appendChild(header);

    //Cria o parágrafo
    let instruction = document.createElement('p');
    instruction.id = 'funcionamento';
    instruction.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
    body.appendChild(instruction);

    //Chama a função que cria o input e botão de add
    createInput();

    //Cria a lista ordenada
    let list = document.createElement('ol');
    list.id = 'lista-tarefas';
    body.appendChild(list);
}

function createInput() {
    //Cria input
    let input = document.createElement('input');
    input.id = 'texto-tarefa';
    body.appendChild(input);

    //Cria o botão
    let button = document.createElement('button');
    button.id = 'criar-tarefa';
    button.innerHTML = 'Criar';

    //Adiciona ao botão a função de adicionar itens a lista e limpar o input
    button.addEventListener('click', function () {
        let lista = document.querySelector('#lista-tarefas');
        let novaTarefa = document.querySelector('#texto-tarefa').value;

        //Cria a nova linha, adiciona o texto a ela e associa a lista
        let novaLinha = document.createElement('li');
        novaLinha.innerHTML = novaTarefa;
        novaLinha.className = '';
        addListenersToListItem(novaLinha);
        lista.appendChild(novaLinha);        

        //Limpa o campo input
        document.querySelector('#texto-tarefa').value = '';
    })

    body.appendChild(button);
}

function addListenersToListItem(listItem) {

    //Adiciona um listener a essa nova linha para que quando for clicado troque a cor de fundo
    listItem.addEventListener('click', function (event) {
        let getAllListItems = document.querySelectorAll('li');
        for (let i = 0; i < getAllListItems.length; i += 1) {
            getAllListItems[i].style.backgroundColor = '';
        }
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    })

    //Adiciona um listener a essa nova linha para que quando for clicado duas vezes o texto fique riscado
    listItem.addEventListener('dblclick', function (event) {

        let checkClasses = event.target.className;

        if (checkClasses == '') {
            event.target.className = 'completed';
        } else {
            event.target.className = '';
        }
    })
}

function buttonDeleteAll() {
    let button = document.createElement('button');
    button.id = 'apaga-tudo';
    button.innerHTML = 'Apagar tudo';

    button.addEventListener('click', function () {
        let getTaskList = document.querySelector('#lista-tarefas');
        let getAllItems = document.querySelectorAll('li');

        for (let i = 0; i < getAllItems.length; i += 1) {
            getTaskList.removeChild(getAllItems[i]);
        }

    })

    body.appendChild(button);
}

function buttonDeleteFinished() {
    let button = document.createElement('button');
    button.id = 'remover-finalizados';
    button.innerHTML = 'Remover finalizados';

    button.addEventListener('click', function () {
        let getTaskList = document.querySelector('#lista-tarefas');
        let getAllFinished = document.querySelectorAll('.completed');

        for (let i = 0; i < getAllFinished.length; i += 1) {
            getTaskList.removeChild(getAllFinished[i]);
        }

    })
    body.appendChild(button);
}

function saveTasks() {
    let button = document.createElement('button');
    button.id = 'salvar-tarefas';
    button.innerHTML = 'Salvar tarefas';

    button.addEventListener('click', function () {
        let getAllListItems = document.querySelectorAll('li');
        for (let i = 0; i < getAllListItems.length; i += 1) {
            getAllListItems[i].style.backgroundColor = '';
        }
        let taskListToSave = document.querySelector('#lista-tarefas').innerHTML;
        localStorage.setItem('taskList', taskListToSave);
    })
    body.appendChild(button);
}

function buttonMoveTask() {
    let buttonUp = document.createElement('button');
    buttonUp.id = 'mover-cima';
    buttonUp.innerHTML = 'Mover para cima';

    let buttonDown = document.createElement('button');
    buttonDown.id = 'mover-baixo';
    buttonDown.innerHTML = 'Mover para baixo';

    buttonUp.addEventListener('click', function () {
        let getList = document.querySelector('#lista-tarefas');
        let taskSelected = getSelected();
        let firstChild = getList.firstChild;        

        if(taskSelected == firstChild || taskSelected == null){            
        }else{
            let previousTask = taskSelected.previousSibling;            
            getList.insertBefore(taskSelected, previousTask);            
        }
    })

    body.appendChild(buttonUp);

    buttonDown.addEventListener('click', function () {
        let getList = document.querySelector('#lista-tarefas');
        let taskSelected = getSelected();
        let lastChild = getList.lastChild;

        if(taskSelected == lastChild || taskSelected == null){        
        }else{
            let nextTask = taskSelected.nextSibling;            
            getList.insertBefore(nextTask, taskSelected);            
        }
    })    
    
    body.appendChild(buttonDown);
}

function buttonRemoveSelected() {
    let button = document.createElement('button');
    button.id = 'remover-selecionado';
    button.innerHTML = 'Remover selecionado';

    button.addEventListener('click', function () {
        let getList = document.querySelector('#lista-tarefas')
        getList.removeChild(getSelected());
    })

    body.appendChild(button);
}

function getSelected(){
    let allItems = document.querySelectorAll('li');
    for (let i = 0; i < allItems.length; i += 1) {
        if (allItems[i].style.backgroundColor != '') {
            return allItems[i];
        }
    }
}