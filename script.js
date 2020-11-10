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
  let savedList = [];
  document.querySelectorAll('li').forEach((item, index) => {
    savedList[index] = item.innerText;
  });

  localStorage.listaSalva = JSON.stringify(savedList);
});

function addSavedList() {
  const savedList = JSON.parse(localStorage.listaSalva);

  savedList.forEach((item, index) => {
    createListItemAuto();
    document.querySelectorAll('li')[index].innerText = item;
  });
};

addSavedList();
