//Insere texto na ul
let list = document.querySelector("#lista-tarefas");
document.addEventListener("click", function(event){
    if (event.target.id === "criar-tarefa"){
    let text = document.querySelector("#texto-tarefa").value;
    let newItem = document.createElement('li');
    newItem.innerHTML = text;    
    list.appendChild(newItem);
    document.getElementById("texto-tarefa").value = "";
    }
});