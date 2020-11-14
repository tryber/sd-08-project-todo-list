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
      const completedListItem = document.querySelector(".tarefa.completed");
      if (completedListItem === null) {
        event.target.className = 'tarefa completed';
      } else {
        event.target.className = 'tarefa';
      }
    });
  };
  completedItem();