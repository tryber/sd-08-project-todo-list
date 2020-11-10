//Função para adicionar elemento a lista e apagar o que está dentro do input.
function adcLista (){
  let elementoLista = document.createElement('li');
  elementoLista.className = 'elemento-lista';
  elementoLista.textContent = tarefaParaAdc.value;
  let lista = document.getElementById('lista-tarefas');
  lista.appendChild(elementoLista);
  tarefaParaAdc.value = '';
}

//Botão para adicionar elemento a lista.
let tarefaParaAdc = document.getElementById('texto-tarefa');
let btnAdc = document.getElementById('criar-tarefa');
btnAdc.addEventListener('click', adcLista)


//Função para alterar o fundo de elemento da lista.
function altFundo (element) {
  let listaDeElementos = document.getElementsByClassName('elemento-lista');
  for (i = 0; i < listaDeElementos.length; i += 1) {
    if (listaDeElementos[i].classList.contains('elemento-cinza')) {
      listaDeElementos[i].classList.remove('elemento-cinza');
      listaDeElementos[i].style.removeProperty('backgroudColor');
    }
  }
  element.className += ' elemento-cinza';
}


//Teste para ver se o elemeno clicado é um li da lista ordenada.
document.addEventListener('click', function (clique) {
  if ( clique.target.classList.contains( 'elemento-lista' ) ) {
      altFundo(clique.target);
  }
}, false);


