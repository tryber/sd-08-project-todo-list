function adicionaTexto(){

    let texto = document.getElementById('texto-tarefa');
    let list = document.getElementById('lista-tarefas');
    let itemList = document.createElement('li');
    itemList.innerText = texto.value;
    list.appendChild(itemList);
    texto.value = "";
}
