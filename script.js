// Botão para add tarefa
let buttonCriar = document.getElementById("criar-tarefa");
let lista = document.getElementById("lista-tarefas");
buttonCriar.addEventListener("click", function(){
    let text = document.getElementById("texto-tarefa");
    let itemLista = document.createElement("li");
    itemLista.innerHTML = text.value;
    lista.appendChild(itemLista);
    text.value = ""    
})

let listItem = document.getElementsByTagName("li");
lista.addEventListener("click", function(){
for (let i = 0; i < listItem.length; i += 1) {
listItem[i].addEventListener("click", function(event){
    for (let i = 0; i < listItem.length; i += 1) {
        listItem[i].className = "";
    }
    event.target.className = "selected";
})
}
})

// lista.addEventListener("click", function(event){
//     let listItem = document.getElementsByTagName("li");
//     for (let i = 0; i < listItem.length; i += 1) {
//         listItem[i].className = "";
//     }
//     event.target.className = "selected"
// })