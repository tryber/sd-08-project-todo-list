function adicionaTexto(){

    let texto = document.getElementById('texto-tarefa');
    let list = document.getElementById('lista-tarefas');
    let itemList = document.createElement('li');
    itemList.innerText = texto.value;
    list.appendChild(itemList);
    texto.value = "";
    selectItemList();
}
function selectItemList(){
    
    let box = document.getElementsByTagName('li');
        Array.from(box).forEach(function(box){
            box.addEventListener("click", function(){
            verificaListItem();
            box.style.backgroundColor = 'rgb(' + [128,128,128].join(',') + ')';
           })
        });
}

function verificaListItem(){

    let box = document.getElementsByTagName('li');
        Array.from(box).forEach(function(box){
            box.style.backgroundColor = 'white';
        });
}