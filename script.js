function adicionarItemLista(){
  const novoItemTexto = document.getElementById("texto-tarefa");
  let valorDigitado = novoItemTexto.value;
  //const listas = `<li>${valorDigitado}</li>`;
  const lista = document.getElementById("lista-tarefas");
  const novoItemLista = document.createElement("li")
  novoItemLista.appendChild(document.createTextNode(valorDigitado));
  lista.appendChild(novoItemLista);
  novoItemTexto.value = "";
}

window.onload = () => {
  let botaoAdiciona = document.getElementById("criar-tarefa");
  botaoAdiciona.onclick = adicionarItemLista;

}

