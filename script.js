window.onload = recLocalStorage;

// Botão para adicionar elemento a lista.
let tarefaParaAdc = document.getElementById('texto-tarefa');
let btnAdc = document.getElementById('criar-tarefa');
btnAdc.addEventListener('click', adcLista);

// Função para adicionar elemento a lista e apagar o que está dentro do input.
function adcLista() {
  let elementoLista = document.createElement('li');
  elementoLista.className = 'elemento-lista';
  elementoLista.textContent = tarefaParaAdc.value;
  let lista = document.getElementById('lista-tarefas');
  lista.appendChild(elementoLista);
  tarefaParaAdc.value = '';
}


// Teste para ver se o elemeno clicado é um li da lista ordenada.
document.addEventListener('click', function (clique) {
  if ( clique.target.classList.contains( 'elemento-lista' ) ) {
      altFundo(clique.target);
  }
}, false);

// Função para alterar o fundo de elemento da lista.
function altFundo(element) {
  let listaDeElementos = document.getElementsByClassName('elemento-lista');
  for (let i = 0; i < listaDeElementos.length; i += 1) {
    if (listaDeElementos[i].classList.contains('elemento-cinza')) {
      listaDeElementos[i].classList.remove('elemento-cinza');
      listaDeElementos[i].style.removeProperty('backgroudColor');
    }
  }
  element.className += ' elemento-cinza';
}


// Outro teste para verificar se o elemento é um li para riscá-lo ou não.
document.addEventListener('dblclick', function (clique) {
  if ( clique.target.classList.contains( 'elemento-lista' ) ) {
      riscaLinha(clique.target);
  }
}, false);

// Função para riscar o elemento se for clicado 2 vezes.
function riscaLinha(li) {
  let elementList = li;
  if (elementList.classList.contains('completed')) {
    elementList.classList.remove('completed');
    elementList.style.removeProperty('text-decoration')
  } else {
    elementList.classList.add('completed');
    elementList.style.textDecoration = 'line-through';
  }
}


// Implementação do botão Limpar.
let apagaTudo = document.getElementById('apaga-tudo');
apagaTudo.addEventListener('click', limpaLista);


// Funçao para limpar lista com o botão apagaTudo.
function limpaLista() {
  let ol = document.getElementById('lista-tarefas');
  let filhos = document.getElementById('lista-tarefas').childNodes;
  for (let i = filhos.length; i >= filhos.length; i -= 1) {
    if (ol.children[i - 1]) {
      ol.removeChild(filhos[i - 1]);
    }
  }
}


// Implementação do botão Remover Finalizados.
let apagaFinalizados = document.getElementById('remover-finalizados');
apagaFinalizados.addEventListener('click', removeFinalizados);


// Função para remover finalizados.
function removeFinalizados() {
  let completados = document.querySelectorAll('.completed');
  let ol = document.getElementById('lista-tarefas');
  if (completados.length > 0) {
    for (let i = 0; i < completados.length; i += 1) {
      if (completados[i]) {
        ol.removeChild(completados[i]);
      }
    }
  } else {
    alert('Não tem tarefas completadas.');
  }
}


// Implementação do botão salvar.
let salvaItens = document.getElementById('salvar-tarefas');
salvaItens.addEventListener('click', salva);

// Função para salvar itens no localstorage.
function salva() {
  let listaParaSalvar = document.getElementById('lista-tarefas').children;
  for (let i = 0; i < listaParaSalvar.length; i += 1) {
    localStorage.setItem('li' + [i], listaParaSalvar[i].outerHTML);
  }
}

// Função para recuperar dados do localStorage.
function recLocalStorage() {
  let ol = document.getElementById('lista-tarefas');
  for (let i = 0; i < localStorage.length; i += 1) {
    let li = localStorage.getItem('li' + [i]);
    ol.innerHTML += li;
  }
}


// Implementação do botão mover para cima.
let btnCima = document.getElementById('mover-cima');
btnCima.addEventListener('click', moveCima);

// Função para mover elemento de lista para cima.
function moveCima() {
  let ol = document.getElementById('lista-tarefas');
  let selecionado = document.getElementsByClassName('elemento-cinza');
  let lista = document.getElementById('lista-tarefas').childNodes;
  let listaArray = Array.from(lista);
  let listaSelecionado = '';
  if (selecionado.length != 0) {
    if (listaArray[0].classList.contains('elemento-cinza')) {
      alert('Elemento não pode subir mais.');
    } else {
      for (let i = 1; i < listaArray.length; i += 1) {
        if (listaArray[i].classList.contains('elemento-cinza')) {
          listaSelecionado = listaArray[i];
          listaArray.splice([i], 1);
          listaArray.splice([i - 1], 0, listaSelecionado);
        }
      }
      for (let i = 0; i < listaArray.length; i += 1) {
        ol.appendChild(listaArray[i]);
      }
    }
  }
}


// Implementação do botão mover para baixo.
let btnBaixo = document.getElementById('mover-baixo');
btnBaixo.addEventListener('click', moveBaixo);

// Função para mover elemento de lista para baixo.
function moveBaixo() {
  let ol = document.getElementById('lista-tarefas');
  let selecionado = document.getElementsByClassName('elemento-cinza');
  let lista = document.getElementById('lista-tarefas').childNodes;
  let listaArray = Array.from(lista);
  let listaSelecionado = '';
  if (selecionado.length != 0) {
    if (listaArray[listaArray.length - 1].classList.contains('elemento-cinza')) {
      alert('Elemento não pode descer mais.');
    } else {
      for (let i = 0; i < listaArray.length; i += 1) {
        if (listaArray[i].classList.contains('elemento-cinza')) {
          listaSelecionado = listaArray[i];
          listaArray.splice([i], 1);
          listaArray.splice([i + 1], 0, listaSelecionado);
          break;
        }
      }
      for (let i = 0; i < listaArray.length; i += 1) {
        ol.appendChild(listaArray[i]);
      }
    }
  }
}


// Implementação do botão Remover Selecionado.
let apagaSelecionado = document.getElementById('remover-selecionado');
apagaSelecionado.addEventListener('click', removeSelecionado);

// Função para remover finalizados.
function removeSelecionado() {
  let selecionado = document.querySelectorAll('.elemento-cinza');
  let ol = document.getElementById('lista-tarefas');
  if (selecionado.length > 0) {
    for (let i = 0; i < selecionado.length; i += 1) {
      if (selecionado[i]) {
        ol.removeChild(selecionado[i]);
      }
    }
  } else {
    alert('Não tem tarefas selecionada.');
  }
}
