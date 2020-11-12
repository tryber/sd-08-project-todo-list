const lista = document.getElementById('lista-tarefas');
const itemInput = document.getElementById('texto-tarefa');
const buttonAddItem = document.getElementById('criar-tarefa');
const buttonRemoveAll = document.getElementById('apaga-tudo');
const buttonRemoveFin = document.getElementById('remover-finalizados');
const buttonRemoveSel = document.getElementById('remover-selecionado');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');

function SwapTo(label, a, b) {
  if (label === 'mover-cima' && a.previousElementSibling) {
    a.parentNode.insertBefore(a, a.previousElementSibling);
    return;
  }
  if (label === 'mover-baixo') {
    a.parentNode.insertBefore(b, a);
  }
}

function FindPath(path) {
  if(path[0].id !== '') {
    return path[0].id;
  }
  return path[1].id;
}

function Swap(e) {
  const itens = document.getElementsByTagName('li');
  let itemToSwap;
  let nextItem; 

  for (let i = 0; i < itens.length; i += 1) {
    if(itens[i].classList.contains('focus-item')) {
      itemToSwap = itens[i];
      if (i < itens.length - 1) {
        nextItem = itens[i + 1];
      }
    }
  }

  SwapTo(FindPath(e.path), itemToSwap, nextItem);
}

buttonAddItem.addEventListener('click', function () {
  const item = document.createElement('li');
  item.innerText = itemInput.value;
  itemInput.value = '';
  lista.appendChild(item);
});

lista.addEventListener('click', function (e) {
  if (document.getElementsByClassName('focus-item').length > 0) {
    document.getElementsByClassName('focus-item')[0].classList.remove('focus-item');
  }
  e.target.classList.add('focus-item');
});

lista.addEventListener('dblclick', function (e) {
  e.target.classList.toggle('completed');
});

buttonRemoveAll.addEventListener('click', function () {
  lista.innerHTML = '';
});

buttonRemoveFin.addEventListener('click', function () {
  const completed = document.getElementsByClassName('completed');
  while (completed.length > 0) {
    completed[0].remove();
  }
});

buttonUp.addEventListener('click', Swap);
buttonDown.addEventListener('click', Swap);

buttonRemoveSel.addEventListener('click', function () {
  const focused = document.getElementsByClassName('focus-item');
  if (focused.length > 0) {
    focused[0].remove();
  }
});
