//Funções Auxiliares
function createListItemManual() {
  const input = document.querySelector('#texto-tarefa');
  if (input.value !== '') {
    const lista = document.querySelector('#lista-tarefas');
    const novaTarefa = document.createElement('li');

    novaTarefa.innerText = input.value;
    novaTarefa.addEventListener('click', () => {
      const selecteds = document.querySelectorAll('.selected');
      selecteds.forEach((item) => {
        item.classList.remove('selected');
      });
      novaTarefa.classList.add('selected');
    });

    novaTarefa.addEventListener('dblclick', () => {
      novaTarefa.classList.toggle('completed');
    });

    lista.appendChild(novaTarefa);

    input.value = '';
  }
}

function createListItemAuto() {
  const lista = document.querySelector('#lista-tarefas');
  const novaTarefa = document.createElement('li');

  novaTarefa.addEventListener('click', () => {
    const selecteds = document.querySelectorAll('.selected');
    selecteds.forEach((item) => {
      item.classList.remove('selected');
    });
    novaTarefa.classList.add('selected');
  });

  novaTarefa.addEventListener('dblclick', () => {
    novaTarefa.classList.toggle('completed');
  });

  lista.appendChild(novaTarefa);
}

function addSavedList() {
  const savedList = JSON.parse(localStorage.listaSalva);

  savedList.text.forEach((item, index) => {
    createListItemAuto();
    document.querySelectorAll('li')[index].innerText = item;
    if (savedList.completed[index] == true) {
      document.querySelectorAll('li')[index].classList.add('completed');
    }
  });
}

//Main Code
window.onload = () => {
  if (localStorage.listaSalva !== undefined) {
    addSavedList();
  }
};

document
  .querySelector('#criar-tarefa')
  .addEventListener('click', createListItemManual);
document
  .querySelector('#texto-tarefa')
  .addEventListener('change', createListItemManual);

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  const listItems = document.querySelectorAll('li');

  for (let i = listItems.length - 1; i >= 0; i -= 1) {
    listItems[i].remove();
  }
});

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  const listItems = document.querySelectorAll('.completed');

  for (let i = listItems.length - 1; i >= 0; i -= 1) {
    listItems[i].remove();
  }
});

document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  const savedList = {
    text: [],
    completed: [],
  };
  document.querySelectorAll('li').forEach((item, index) => {
    savedList.text[index] = item.innerText;
    savedList.completed[index] = item.classList.contains('completed');
  });

  localStorage.listaSalva = JSON.stringify(savedList);
});

document.querySelector('#mover-baixo').addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    if (selected.nextElementSibling !== null) {
      selected.nextElementSibling.insertAdjacentElement('afterend', selected);
    }
  }
});

document.querySelector('#mover-cima').addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    if (selected.previousElementSibling !== null) {
      selected.previousElementSibling.insertAdjacentElement(
        'beforebegin',
        selected
      );
    }
  }
});

document.querySelector('#remover-selecionado').addEventListener('click', () => {
  document.querySelector('.selected').remove();
});
