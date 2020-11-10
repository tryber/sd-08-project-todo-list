//Cria titulo - 1º requisito
const title = document.createElement('h1');
document.querySelector('header').appendChild(title);
title.innerText = 'Minha Lista de Tarefas';
//Cria paragrafo e adiciona ID - 2º requisito
const textInf = document.createElement('p');
document.querySelector('body').appendChild(textInf);
textInf.id = 'funcionamento';
textInf.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
//Cria caixa de texto para 'imput' - 3º requisito
const txtBox = document.createElement('input');
txtBox.id = 'texto-tarefa';
txtBox.type = 'text';
document.querySelector('body').appendChild(txtBox);
//Cria lista ordenada - 4º requisito
const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
document.querySelector('body').appendChild(taskList);
//Cria Botão e Lista valor do imput - 5º requisito
const btnCriar = document.createElement('button');
btnCriar.id = 'criar-tarefa';
btnCriar.innerText = 'Nova Tarefa';
document.querySelector('body').appendChild(btnCriar);
btnCriar.addEventListener('click', makeList);

function makeList(){
    const conteudo = document.getElementById('texto-tarefa').value;
    const listaTarefas = document.createElement('li');
    listaTarefas.innerText = conteudo;
    document.getElementById('texto-tarefa').value = '';
    document.querySelector('#lista-tarefas').appendChild(listaTarefas);
}