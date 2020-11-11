// links de estudos:
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild
// https://www.guj.com.br/t/capturar-valor-digitado-javascript-puro/300973/5
// https://pt.stackoverflow.com/questions/415027/como-inserir-uma-li-em-uma-ul-com-javascript
// https://stackoverflow.com/questions/31395362/adding-id-to-li-javascript

var listItemCounter = 0;

function selecionarItemLista(){

  const itensSelecionados = document.getElementsByClassName("selected");
  
  for(let itemSelecionado of itensSelecionados){
    itemSelecionado.classList.remove("selected");
  };
  event.target.classList.add("selected");
 
}

//https://stackoverflow.com/questions/13658021/jquery-index-in-vanilla-javascript
function indexInParent(node) {
  var children = node.parentNode.childNodes;
  var num = 0;
  for (var i=0; i<children.length; i++) {
       if (children[i]==node) return num;
       if (children[i].nodeType==1) num++;
  }
  return -1;
}

function adicionarItemLista(){

  const novoItemTexto = document.getElementById("texto-tarefa");
  let valorDigitado = novoItemTexto.value;

  const listaOL = document.getElementById("lista-tarefas");
  const novoItemLista = document.createElement("li")

  novoItemLista.id = 'list-Item' + listItemCounter++;
  novoItemLista.onclick = selecionarItemLista;
  const valorTextoParaLi = document.createTextNode(valorDigitado);

  novoItemLista.appendChild(valorTextoParaLi);
  listaOL.appendChild(novoItemLista);
  novoItemTexto.value = "";

}

function sobeItem(){
  let itemSelecionado = document.getElementsByClassName("selected"); 
  let list = document.getElementById("lista-tarefas");  
  let posicacaoAtual = indexInParent(itemSelecionado[0]);
  list.insertBefore(itemSelecionado[0], list.childNodes[posicacaoAtual]);
}

function desceItem(){
  let itemSelecionado = document.getElementsByClassName("selected"); 
  let list = document.getElementById("lista-tarefas");  
  let posicacaoAtual = indexInParent(itemSelecionado[0]);
  list.insertBefore(itemSelecionado[0], list.childNodes[posicacaoAtual+3]);
}

window.onload = () => {
  let botaoAdiciona = document.getElementById("criar-tarefa");
  botaoAdiciona.onclick = adicionarItemLista;

  let botaoSobeItem = document.getElementById("mover-cima");
  botaoSobeItem.onclick = sobeItem;

  let botaoDesceItem = document.getElementById("mover-baixo");
  botaoDesceItem.onclick = desceItem;


}

