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

function riscarItem() {
  let temClasse = event.target.classList.contains("completed");
  if(temClasse){
    event.target.classList.remove("completed");
  }
  else{
    event.target.classList.add("completed");
  }
}


function adicionarItemLista(){

  const novoItemTexto = document.getElementById("texto-tarefa");
  let valorDigitado = novoItemTexto.value;

  criarLi(valorDigitado);
  novoItemTexto.value = "";

}

function sobeItem(){
  let itemSelecionado = document.getElementsByClassName("selected"); 
  if(itemSelecionado.length === 0)
    return;

  let list = document.getElementById("lista-tarefas");  
  let posicacaoAtual = indexInParent(itemSelecionado[0]);
  list.insertBefore(itemSelecionado[0], list.childNodes[posicacaoAtual]);
}

function desceItem(){
  let itemSelecionado = document.getElementsByClassName("selected"); 
  if(itemSelecionado.length === 0)
    return;
  let list = document.getElementById("lista-tarefas");  
  let posicacaoAtual = indexInParent(itemSelecionado[0]);
  list.insertBefore(itemSelecionado[0], list.childNodes[posicacaoAtual+3]);
}

//https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
function apagarPorClasse(className){
  var nos = document.getElementsByClassName(className);
  var numeroDeElementos = nos.length;
  for (let x = 0; x < numeroDeElementos; x++)
  {
    if (nos[0].parentNode) {
      nos[0].parentNode.removeChild(nos[0]);
    }
  }
}

//https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
function ApagarTodos() {
  var pai = document.getElementById("lista-tarefas");
  while (pai.firstChild) {
    pai.removeChild(pai.firstChild);
  }
}
//https://pt.stackoverflow.com/questions/433534/existe-a-possibilidade-de-salvar-um-objeto-usado-localstorage-do-navegador
function salvaLista() {
  let array = []
  let lista = document.getElementsByTagName("li")
  for(let elementos of lista) {
    array.push(elementos.textContent);
  }
  localStorage.setItem("dados", array);
}

function carregarLista() {
  //Busca array do storaged
  let dadosTexto = localStorage.getItem("dados")
  //Roda para cada elemento do array criando o li igual la ejcima
  if(dadosTexto === null)
    return;

  let dados = dadosTexto.split(",");

  for (let dado of dados){
    criarLi(dado);
  }
}

function criarLi(conteudo){
  const listaOL = document.getElementById("lista-tarefas");
  const novoItemLista = document.createElement("li")

  novoItemLista.id = 'list-Item' + listItemCounter++;
  novoItemLista.onclick = selecionarItemLista;
  novoItemLista.addEventListener('dblclick', riscarItem);

  const valorTextoParaLi = document.createTextNode(conteudo);

  novoItemLista.appendChild(valorTextoParaLi);
  listaOL.appendChild(novoItemLista);
}

window.onload = () => {
  let botaoAdiciona = document.getElementById("criar-tarefa");
  botaoAdiciona.onclick = adicionarItemLista;

  let botaoSobeItem = document.getElementById("mover-cima");
  //botaoSobeItem.onclick = sobeItem;
  botaoSobeItem.addEventListener('click', sobeItem);

  let botaoDesceItem = document.getElementById("mover-baixo");
  botaoDesceItem.onclick = desceItem;

  let botaoRemoveRiscados = document.getElementById("remover-finalizados");
  botaoRemoveRiscados.onclick = () => apagarPorClasse("completed");

  let botaoRemoveTodos = document.getElementById("apaga-tudo");
  botaoRemoveTodos.onclick = ApagarTodos;

  let botaoRemoveSelecionados = document.getElementById("remover-selecionado");
  botaoRemoveSelecionados.onclick = () => apagarPorClasse("selected");

  let botaoSalvaLista = document.getElementById("salvar-tarefas");
  botaoSalvaLista.onclick = salvaLista;
  
  carregarLista();

}

