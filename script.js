let caixaTexto = document.getElementById("texto-tarefa");
let btnAdiciona = document.querySelector('#criar-tarefa');
let listagem = document.querySelector('#lista-tarefas');
let liLocal = document.getElementsByTagName('li');
// Função para adicionar lista//
function adicionar() {
    let item = document.createElement('li');
    let inserirValor= document.principal.texto.value;
    let inserirTexto=document.createTextNode(inserirValor);
  
    item.appendChild(inserirTexto);
    listagem.appendChild(item);
    document.principal.texto.value= "";
  
  };

// Evento para mudar o background

listagem.addEventListener('click', function(event){
  
  for (let index=0; index<liLocal.length; index +=1){
    liLocal[index].style.backgroundColor = '';

  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

listagem.addEventListener('dblclick',function(event){
  event.target.className += " completed";

})