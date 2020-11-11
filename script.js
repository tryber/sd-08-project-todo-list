const orderList = document.querySelector('lista-tarefas');


function addItemlist() {
    let btnAdd = document.getElementById('criar-tarefa');
   
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
    orderlist.addEventListener('click', function(event){
        event.target.className = 'select';
        event.target.style.backgoundColor = 'rgb(128,128,128)';
    });
}
itemSelected();