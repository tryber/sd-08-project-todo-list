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
header.parentNode.insertBefore(input, header.nextSibling);

/* ---------------------------- REQUISITO 04 ---------------------------- */

const ol = document.createElement('ol');
ol.id = 'lista-tarefas';
input.parentNode.insertBefore(ol, input.nextSibling);
