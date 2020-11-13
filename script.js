/* ---------------------------- REQUISITO 01 e 02---------------------------- */
const header = document.getElementsByTagName('header')[0];
const title = document.createElement('h1');
const paragraph = document.createElement('p');
title.innerHTML = 'Minha Lista de Tarefas';
paragraph.id = 'funcionamento';
paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
header.appendChild(title);
header.appendChild(paragraph);

/* ---------------------------- REQUISITO 03 ---------------------------- */

const input = document.createElement('input');
input.id = 'texto-tarefa';
input.placeholder = 'Digite uma tarefa aqui';
header.parentNode.insertBefore(input, header.nextSibling);

/* ---------------------------- REQUISITO 04 ---------------------------- */

const ol = document.createElement('ol');
ol.id = 'lista-tarefas';
input.parentNode.insertBefore(ol, input.nextSibling);

/* ---------------------------- REQUISITO 05 e 06 ---------------------------- */

const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerHTML = 'Adicionar tarefa';
input.parentNode.insertBefore(button, input.nextSibling);

button.addEventListener('click', function () {
    if (input.value != '') {
        const li = document.createElement('li');
        li.classList.add('task');
        li.style.backgroundColor = 'white'; // colocar background no css
        li.innerHTML = input.value;
        ol.appendChild(li);
    }
    input.value = '';
});

/* ---------------------------- REQUISITO 07 e 08 ---------------------------- */

// document.querySelectorAll("ol")[0].childNodes.forEach() //...

ol.addEventListener('click', function (event) {
    const listItem = document.querySelectorAll('.task');

    for (let i = 0; i < listItem.length; i += 1) {
        listItem[i].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
});

/* ---------------------------- REQUISITO 09 ---------------------------- */

ol.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
});

/* ---------------------------- REQUISITO 10 ---------------------------- */

const buttonClear = document.createElement('button');
buttonClear.id = 'apaga-tudo';
buttonClear.innerHTML = 'Limpar tarefas';
ol.parentNode.insertBefore(buttonClear, ol.nextSibling);

buttonClear.addEventListener('click', function (event) {
    ol.innerHTML = '';
});

/* ---------------------------- REQUISITO 11 ---------------------------- */

const buttonClearFinished = document.createElement('button');
buttonClearFinished.id = 'remover-finalizados';
buttonClearFinished.innerHTML = 'Limpar tarefas finalizadas';
buttonClear.parentNode.insertBefore(buttonClearFinished, buttonClear.nextSibling);

buttonClearFinished.addEventListener('click', function (event) {
    const taskFinished = document.querySelectorAll('.completed');

    for (let i = 0; i < taskFinished.length; i += 1) {
        taskFinished[i].remove();
    }
});

/* ---------------------------- REQUISITO 12 ---------------------------- */

const buttonSaveTask = document.createElement('button');
buttonSaveTask.id = 'salvar-tarefas';
buttonSaveTask.innerHTML = 'Salvar tarefas';
buttonClearFinished.parentNode.insertBefore(buttonSaveTask, buttonClearFinished.nextSibling);

buttonSaveTask.addEventListener('click', function (event) {
    localStorage.setItem('listTaskFinished', ol.innerHTML);
})
ol.innerHTML = localStorage.getItem('listTaskFinished');

/* ---------------------------- REQUISITO 14 ---------------------------- */

const removeItem = document.createElement('button');
removeItem.id = 'remover-selecionado';
removeItem.innerHTML = 'Apaga Item Selecionado';
buttonClearFinished.parentNode.insertBefore(removeItem, buttonClearFinished.nextSibling);

removeItem.addEventListener('click', function (event) {
    const liItem = document.querySelectorAll('.task');
    for (let i = 0; i < liItem.length; i += 1) {
        if (event.target.style.backgroundColor === 'rgb(128, 128, 128)') {
            liItem[i].remove();
        }
    }
})

/* ---------------------------- REQUISITO 13 ---------------------------- */

const buttonUp = document.createElement('button');
buttonUp.id = 'mover-cima';
buttonUp.innerHTML = '&uarr;'
buttonSaveTask.parentNode.insertBefore(buttonUp, buttonSaveTask.nextSibling);

const buttonDown = document.createElement('button');
buttonDown.id = 'mover-baixo';
buttonDown.innerHTML = '&darr;';
buttonSaveTask.parentNode.insertBefore(buttonDown, buttonSaveTask.nextSibling);

buttonUp.addEventListener('click', function (event) {

});

buttonDown.addEventListener('click', function (event) {

});

