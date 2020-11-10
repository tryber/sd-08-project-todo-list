function adicionaTexto(){

    let texto = document.getElementById('texto-tarefa');
    let list = document.getElementById('lista-tarefas');
    let itemList = document.createElement('li');
    itemList.innerText = texto.value;
    //Requisito 7
    itemList.addEventListener("click", function(){
        verificaListItem();
        itemList.style.backgroundColor = 'rgb(' + [128,128,128].join(',') + ')';
       });
    // Requisito 9
    itemList.addEventListener("dblclick", function(){
        itemList.classList.toggle('completed');
       });
    list.appendChild(itemList);
    texto.value = "";
}

//Requisito 8
function verificaListItem(){

    let box = document.getElementsByTagName('li');
        Array.from(box).forEach(function(box){
            box.style.removeProperty('background-color');
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
    let box = document.getElementsByTagName('li');
        Array.from(box).forEach(function(box){
            if(box.className == "completed"){
                list.removeChild(box);
            }
        });

}