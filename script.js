//Cria titulo - 1º requisito
const title = document.createElement('h1');
document.querySelector('header').appendChild(title);
title.innerText = 'Minha Lista de Tarefas';
//Cria paragrafo e adiciona ID - 2º requisito
const textInf = document.createElement('p');
document.querySelector('body').appendChild(textInf);
textInf.id = 'funcionamento';
textInf.innerText = 'Clique duas vezes em um item para marcá-lo como completo';