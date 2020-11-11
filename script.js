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
    const conteudo = document.getElementById('texto-tarefa').value; //Pega valor do imput
    const listaTarefas = document.createElement('li');
    listaTarefas.innerText = conteudo; //Lista recebe valor do imput
    listaTarefas.id = 'lista';
    document.getElementById('texto-tarefa').value = ''; //Apaga valor do imput
    document.querySelector('#lista-tarefas').appendChild(listaTarefas); //Cria lista
    
}
//Define backgroundcolor dos itens da Lista - 6º
const backColorList = document.getElementById('lista-tarefas');
backColorList.addEventListener('click', backColorPaint);

function rmvColorPaint(){
    const vetorLista = document.querySelectorAll('#lista');
    for(let index = 0; index < vetorLista.length; index += 1){
        vetorLista[index].style = '';
    }
}//Remove style

function backColorPaint(event){
    const vetorLista = document.querySelectorAll('#lista');
    const corLista = 'rgb(128, 128, 128)';
    rmvColorPaint();
    
    if(backColorList.style.backgroundColor != backColorList.style.backgroundColor.corLista){
        event.target.style.backgroundColor = corLista;
    }
}//Aplica style
        
   
  
    
    


