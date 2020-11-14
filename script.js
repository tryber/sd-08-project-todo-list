const orderList = document.querySelector('#lista-tarefas');

function addItemlist() {
    let btnAdd = document.getElementById('criar-tarefa');
    let orderList = document.querySelector('#lista-tarefas');
    function addItem(){
        let inputItem = document.querySelector('#texto-tarefa').value;
        let itemList = document.createElement('li');
        itemList.innerHTML = inputItem;
        itemList.className= 'tarefa';
        orderList.appendChild(itemList);
        clearInputValue();
    }
    btnAdd.addEventListener('click', addItem);

    function clearInputValue(){
        document.querySelector('#texto-tarefa').value = '';
    }
}
addItemlist();

function itemSelected() {
    orderList.addEventListener('click', function(event){
        const itemSelectedList = document.querySelector('.selected');
        if (itemSelectedList === null) {
          event.target.classList.add('selected');
          event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        } else {
            itemSelectedList.classList.remove('selected');
            itemSelectedList.style.backgroundColor = '';
          event.target.classList.add('selected');
          event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
});
};
itemSelected();
function completedItem() {
    orderList.addEventListener('dblclick', function (event) {
      const completedListItem = document.querySelector(".tarefa.selected.completed");
      if (completedListItem === null) {
        event.target.className = 'tarefa selected completed';
      } else {
        event.target.className = 'tarefa selected';
      }
    });
  };
completedItem();
  function deleteList() {
    const btnDeleteAll = document.querySelector('#apaga-tudo');
    btnDeleteAll.addEventListener('click', function () {
      while (orderList.firstChild) {
        orderList.removeChild(orderList.lastChild);
      }
    });
  }
deleteList();
  function deleteCompletedItens() {
    const btnDeleteItens = document.querySelector('#remover-finalizados');
  
    btnDeleteItens.addEventListener('click', function () {
      let completedListItem = document.getElementsByClassName('completed');
      while(completedListItem.length > 0) {
        completedListItem[0].parentNode.removeChild(completedListItem[0]);
      }
    });
  };
deleteCompletedItens();