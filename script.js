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
    const li = document.createElement('li');
    li.classList.add('task');
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value = '';
})

/* ---------------------------- REQUISITO 07 e 08 ---------------------------- */

ol.addEventListener('click', function (event) {
    const listItem = document.querySelectorAll('.task');

    for (let i = 0; i < listItem.length; i += 1) {
        listItem[i].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
})

/* ---------------------------- REQUISITO 09 ---------------------------- */

ol.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
})

/* ---------------------------- REQUISITO 10 ---------------------------- */

const buttonClear = document.createElement('button');
buttonClear.id = 'apaga-tudo';
buttonClear.innerHTML = 'Limpar tarefas';
ol.parentNode.insertBefore(buttonClear, ol.nextSibling);

buttonClear.addEventListener('click', function (event) {
    ol.innerHTML = '';
})

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
})