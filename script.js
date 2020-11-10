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


//Função para riscar o elemento se for clicado 2 vezes.
function riscaLinha (li) {
  let elementList = li;
  if (elementList.classList.contains('completed')) {
    elementList.classList.remove('completed');
    elementList.style.removeProperty('text-decoration')
  } else {
    elementList.classList.add('completed');
    elementList.style.textDecoration = 'line-through'
  }
}


//Outro teste para verificar se o elemento é um li para riscá-lo ou não.
document.addEventListener('dblclick', function (clique) {
  if ( clique.target.classList.contains( 'elemento-lista' ) ) {
      riscaLinha(clique.target);
  }
}, false);


//Funçao para limpar lista com o botão apagaTudo.
function limpaLista () {
  let lista = document.getElementById('lista-tarefas');
  let filhos = document.getElementsByClassName('elemento-lista');
  for (i = filhos.length; i >= filhos.length; i -= 1) {
    lista.removeChild(filhos[i - 1]);
  }  
}

//Implementação do botão Limpar.
let apagaTudo = document.getElementById('apaga-tudo');
apagaTudo.addEventListener('click', limpaLista)