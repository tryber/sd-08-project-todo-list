let buttonCriar = document.getElementById("criar-tarefa");
buttonCriar.addEventListener("click", function(){
    let text = document.getElementById("texto-tarefa");
    let lista = document.getElementById("lista-tarefas");
    let itemLista = document.createElement("li");
    itemLista.innerHTML = text.value;
    lista.appendChild(itemLista);
    text.value = ""    
})