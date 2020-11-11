window.onload = () => {
  
  if (localStorage.listaSalva != undefined) {
    addSavedList();
  }
  
  document.querySelector('#criar-tarefa').addEventListener('click', createListItemManual);
  document.querySelector('#texto-tarefa').addEventListener('change', createListItemManual);
  
  document.querySelector('#apaga-tudo').addEventListener('click', () => {
    const listItems = document.querySelectorAll('li');
  
    for (let i = listItems.length - 1; i >=0; i -= 1) {
      listItems[i].remove();
    }
  });
  
  document.querySelector('#remover-finalizados').addEventListener('click', () => {
    const listItems = document.querySelectorAll('.completed');
  
    for (let i = listItems.length - 1; i >=0; i -= 1) {
      listItems[i].remove();
    }
  });
  
  document.querySelector('#salvar-tarefas').addEventListener('click', () => {
    let savedList = {
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
    if (selected != null) {
      if (selected.nextElementSibling != null) {
        selected.nextElementSibling.insertAdjacentElement('afterend', selected);
      }
    }
  });
  
  document.querySelector('#mover-cima').addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected != null) {
      if (selected.previousElementSibling != null) {
        selected.previousElementSibling.insertAdjacentElement('beforebegin', selected);
      }
    }
  });
  
  document.querySelector('#remover-selecionado').addEventListener('click', () => {
    document.querySelector('.selected').remove();
  });
}

