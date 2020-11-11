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
    // li.style.backgroundColor = 'white';
    li.classList.add('task');
    li.innerHTML = input.value;
    input.value = '';
    ol.appendChild(li);
})

/* ---------------------------- REQUISITO 07 ---------------------------- */

ol.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
})