window.onload = function(){

    let list = document.getElementById('lista-tarefas');
    let count=0;
    do{
        try{
            let listLoad = JSON.parse(localStorage.getItem(`index${count}`));
            sessionStorage.setItem('name', listLoad.conteudo);
            sessionStorage.setItem('ok', listLoad.verifica);
            adicionaTexto();
            count++;
        }catch{
            break;
        }  
    }while(count > 0)
}


function adicionaTexto(){

    let confirmaNome = sessionStorage.getItem('name');
    let texto = document.getElementById('texto-tarefa');
    let list = document.getElementById('lista-tarefas');
    let itemList = document.createElement('li');
    if(confirmaNome != null){
        itemList.innerText = confirmaNome;
        if(sessionStorage.getItem('ok') == "true"){
            itemList.className = 'completed';
        }  
    }else{
        itemList.innerText = texto.value;
    }
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
    sessionStorage.clear();
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
//Requisito 12
function saveChanges(){
    
    localStorage.clear();
    let count = 0;
    let list = document.getElementById('lista-tarefas');
    let itemList = document.getElementsByTagName('li');
        Array.from(itemList).forEach(function(itemList){
            let index = {
                conteudo: itemList.innerText,
                verifica: itemList.className.includes("completed")
            };
            localStorage.setItem(`index${count}`, JSON.stringify(index));
            count++;
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
        itemList.previousSibling.className += ' selected';
        if(itemList.className.includes('completed')){
            itemList.classList.remove('completed');
            itemList.previousSibling.className += ' completed';
        }
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
        itemList.nextSibling.className += ' selected';
        if(itemList.className.includes('completed')){
            itemList.classList.remove('completed');
            itemList.nextSibling.className += ' completed';
        }
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
