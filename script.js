function selectedItem(item) {
  const previousSelected = document.querySelector('.selected');
  if (previousSelected != null) {
    previousSelected.style.backgroundColor = '';
    previousSelected.classList.remove('selected');
  }
  item.style.backgroundColor = 'rgb(128, 128, 128)';
  item.classList.add('selected');
}

function preencheItem(item, li, ol) {
  li.innerText = item;
  li.className = 'item';
  li.id = `item${ol.children.length + 1}`;
  return li;
}

function criarItemLista(item) {
  const li = document.createElement('li');
  const ol = document.getElementById('lista-tarefas');
  preencheItem(item, li, ol);
  ol.appendChild(li);
}

function criarTarefa(listaTarefa) {
  const input = document.getElementById('texto-tarefa');
  criarItemLista(input.value, listaTarefa);
  input.value = '';
}

function capturaEvento(elementoHTML, tipoEvento, acaoDoEvento) {
  const elementoPai = document.getElementById(elementoHTML);
  elementoPai.addEventListener(tipoEvento, (element) => acaoDoEvento(element.target));
}

capturaEvento('criar-tarefa', 'click', criarTarefa);
capturaEvento('lista-tarefas', 'click', selectedItem);
