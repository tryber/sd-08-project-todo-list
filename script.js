document.getElementById('criar-tarefa').addEventListener('click', function () {
    const inputItem = document.getElementById('texto-tarefa');
    const arrayItens = [inputItem.value];
    createItemList(arrayItens);
    clearInputValue(inputItem);
  });