//Função para adicionar elemento a lista
function adcLista (){
  let elementoLista = document.createElement('li');
  elementoLista.textContent = tarefaParaAdc.value;
  let lista = document.getElementById('lista-tarefas');
  lista.appendChild(elementoLista);

  tarefaParaAdc.value = '';
}





//Botão para adicionar elemento a lista.
let tarefaParaAdc = document.getElementById('texto-tarefa');
let btnAdc = document.getElementById('criar-tarefa');
btnAdc.addEventListener('click', adcLista)