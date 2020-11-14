const settings = {
  selected: null
};

// Criar Tarefa
document.getElementById('criar-tarefa').addEventListener('click', () => {
  const taskText = document.getElementById('texto-tarefa').value || '';

  if (taskText.trim() !== '') {
    document.getElementById('texto-tarefa').value = '';

    document.getElementById(
      'lista-tarefas'
    ).innerHTML += `<li class='task'>${taskText.trim()} </li>`;
  }
});

// Remover Todas
document.getElementById('apaga-tudo').addEventListener('click', () => {
  document.getElementById('lista-tarefas').innerHTML = '';
});

// Seleciona
document.getElementById('lista-tarefas').addEventListener('click', () => {
  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected');
    settings.selected = null;
  } else if (event.target.classList.contains('task')) {
    document.querySelectorAll('.task').forEach((element) => {
      element.classList.remove('selected');
    });
    event.target.classList.add('selected');
    settings.selected = event.target;
  }
});

// executado
document.getElementById('lista-tarefas').addEventListener('dblclick', () => {
  if (event.target.classList.contains('task')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

// Remove Selecionado
document.getElementById('remover-selecionado').addEventListener('click', () => {
  if (settings.selected !== null) {
    settings.selected.remove();
    settings.selected = null;
  }
});

// Remove Finalizado
document.getElementById('remover-finalizados').addEventListener('click', () => {
  document.querySelectorAll('.completed').forEach((element) => {
    element.remove();
  });
});

/*

function saveList() {
  btnSave = document.querySelector('#salvar-tarefas');
  btnSave.addEventListener('click', () => {
    clearListLocalStorage();
    const lista = document.querySelector('#lista-tarefas');
    for (let i = 1; i < lista.children.length + 1; i += 1) {
      const key = `Item${i}`;
      const value = lista.children[i - 1].outerHTML;
      localStorage.setItem(key, value);
    }
  });
}

function loadList() {
  const lista = document.querySelector('#lista-tarefas');
  let itemAdd = 'Item1';
  let indexAdd = 1;
  while (localStorage.getItem(itemAdd)) {
    const storage = localStorage.getItem(itemAdd);
    lista.innerHTML += storage;
    indexAdd += 1;
    itemAdd = `Item${indexAdd}`;
  }
}
function clearListLocalStorage() {
  let itemRemove = 'Item1';
  let indexRemove = 1;
  while (localStorage.getItem(itemRemove)) {
    localStorage.removeItem(itemRemove);
    indexRemove += 1;
    itemRemove = `Item${indexRemove}`;
  }
}

function moveUp() {
  const lista = document.querySelector('#lista-tarefas');
  const btnMoveUp = document.querySelector('#mover-cima');
  btnMoveUp.addEventListener('click', () => {
    if (document.querySelector('.selected')) {
      const itemSelected = document.querySelectorAll('.selected');
      if (itemSelected[0].previousElementSibling !== null) {
        const previousItem = itemSelected[0].previousElementSibling.outerHTML;
        itemSelected[0].previousElementSibling.outerHTML = itemSelected[0].outerHTML;
        itemSelected[0].outerHTML = previousItem;
      }
    }
  });
}
moveUp();

function moveDown() {
  const lista = document.querySelector('#lista-tarefas');
  const btnMoveDown = document.querySelector('#mover-baixo');
  btnMoveDown.addEventListener('click', () => {
    if (document.querySelector('.selected')) {
      const itemSelected = document.querySelectorAll('.selected');
      if (itemSelected[0].nextElementSibling !== null) {
        const nextItem = itemSelected[0].nextElementSibling.outerHTML;
        itemSelected[0].nextElementSibling.outerHTML = itemSelected[0].outerHTML;
        itemSelected[0].outerHTML = nextItem;
      }
    }
  });
}
moveDown();

*/
