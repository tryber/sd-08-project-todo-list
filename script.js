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

//Cria Botão e Lista valor do imput - 5º e 6º requisitos
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
//Cria botão apaga tudo - 10º requisito
const apagarLista = document.getElementById('lista-tarefas');
const vetorLista = document.querySelectorAll('#lista');
const btnApagar = document.createElement('button');
btnApagar.id = 'apaga-tudo';
btnApagar.innerText = 'Apagar Lista';
document.querySelector('body').appendChild(btnApagar);
btnApagar.addEventListener('click', clearList);

function clearList(){
    apagarLista.textContent = '';
    // apagarLista.innerHTML = ''; - tfunciona da mesma forma
}
//Define backgroundcolor dos itens da Lista - 7º e 8º requisitos
const backColorList = document.getElementById('lista-tarefas');
backColorList.addEventListener('click', backColorPaint);
//Remove style
function rmvColorPaint(){
    const vetorLista = document.querySelectorAll('#lista');
    for(let index = 0; index < vetorLista.length; index += 1){
        vetorLista[index].style = '';
    }
}
//Aplica style
function backColorPaint(event){
    const corLista = 'rgb(128, 128, 128)';
    rmvColorPaint();
    
    if(backColorList.style.backgroundColor != backColorList.style.backgroundColor.corLista){
        event.target.style.backgroundColor = corLista;
    }
}
//Aplica tarefa concluida - 9º requisito
const completeList = document.getElementById('lista-tarefas');
completeList.addEventListener('dblclick', addDobleClick);

function addDobleClick(event){
    const atributo = event.target;
    if(atributo.className != 'completed'){
        atributo.className = 'completed';
    }else{
        atributo.className = '';
    }
}
        
   
  
    
    


