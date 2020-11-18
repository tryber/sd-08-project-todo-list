function contentP() {
    document.getElementById('funcionamento').innerText = "Clique duas vezes em um item para marcá-lo como completo"
}
contentP();

let addButton = document.getElementById("criar-tarefa");
addButton.addEventListener('click', addToDoItem);
function addToDoItem(){
  
}