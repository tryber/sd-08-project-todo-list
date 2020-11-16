let caixaTexto = document.getElementById("texto-tarefa");
let adicionado = document.getElementById("lista-tarefas");
let btnAdiciona = document.querySelector('#criar-tarefa');
let listagem = document.querySelector('#lista-tarefas');

function adicionar() {
    let item = document.createElement('li');
    let inserirValor= document.principal.texto.value;
    let inserirTexto=document.createTextNode(inserirValor);
  
    item.appendChild(inserirTexto);
    listagem.appendChild(item);
    document.principal.texto.value= "";
  
    //createCloseButton(li);
  }