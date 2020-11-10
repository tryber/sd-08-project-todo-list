function adicionaTexto(){

    let texto = document.getElementById('texto-tarefa');
    let list = document.getElementById('lista-tarefas');
    let itemList = document.createElement('li');
    itemList.innerText = texto.value;
    //Requisito 7
    itemList.addEventListener("click", function(){
        verificaListItem();
        itemList.style.backgroundColor = 'rgb(' + [128,128,128].join(',') + ')';
        itemList.className += ' selected';
       });
    // Requisito 9
    itemList.addEventListener("dblclick", function(){
        itemList.classList.toggle('completed')
       });
    list.appendChild(itemList);
    texto.value = "";
}

//Requisito 8
function verificaListItem(){

    let itemList = document.getElementsByTagName('li');
        Array.from(itemList).forEach(function(itemList){
            itemList.style.removeProperty('background-color');
            itemList.classList.remove('selected');
        });
}
//Requisito 10
function clearAll(){

    let list = document.getElementById('lista-tarefas');
    list.innerHTML = '';
}
//Requisito 11
function clearSelected(){
    
    let list = document.getElementById('lista-tarefas');
    let itemList = document.getElementsByTagName('li');
        Array.from(itemList).forEach(function(itemList){
            if(itemList.className.includes("completed")){
                list.removeChild(itemList);
            }
        });

}
//Requisito 13
function moveUp(){

    let list = document.getElementById('lista-tarefas');
    let itemList = document.querySelector('.selected');
    let item = itemList.innerText;
    if(itemList.previousSibling.tagName != undefined){
        verificaListItem();
        itemList.previousSibling.style.backgroundColor = 'rgb(' + [128,128,128].join(',') + ')';
        itemList.previousSibling.className = 'selected';
        itemList.innerText = itemList.previousSibling.innerText;
        itemList.previousSibling.innerText = item;
    }  
}

function moveDown(){

    let itemList = document.querySelector('.selected');
    let item = itemList.innerText;
    if(itemList.nextSibling != null){
        verificaListItem();
        itemList.nextSibling.style.backgroundColor = 'rgb(' + [128,128,128].join(',') + ')';
        itemList.nextSibling.className = 'selected';
        itemList.innerText = itemList.nextSibling.innerText;
        itemList.nextSibling.innerText = item;
    }
    
}
//Requisito 14
function deleteSelected(){

    let list = document.getElementById('lista-tarefas');
    let itemList = document.querySelector('.selected');
    try{
        list.removeChild(itemList);
    }catch{}
}