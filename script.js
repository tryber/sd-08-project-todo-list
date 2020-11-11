// links de estudos:
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild
// https://www.guj.com.br/t/capturar-valor-digitado-javascript-puro/300973/5
// 

var listItemCounter = 0;

function selecionarItemLista(){

  const itensSelecionados = document.getElementsByClassName("selected");
  
  for(let itemSelecionado of itensSelecionados){
    itemSelecionado.classList.remove("selected");
  };
  event.target.classList.add("selected");
 
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

window.onload = () => {
  let botaoAdiciona = document.getElementById("criar-tarefa");
  botaoAdiciona.onclick = adicionarItemLista;



}

