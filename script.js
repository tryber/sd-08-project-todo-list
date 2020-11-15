//Insere texto na ul
let list = document.querySelector("#lista-tarefas");
document.addEventListener("click", function(event){
    if (event.target.id === "criar-tarefa"){
    let text = document.querySelector("#texto-tarefa").value;
    let newItem = document.createElement('li');
    newItem.innerHTML = text;
    newItem.className = "listItem";
    list.appendChild(newItem);
    document.getElementById("texto-tarefa").value = "";
    }
});
//Clique colore tarefa
let allTasks = document.querySelectorAll("li");
for (let i = 0; i < allTasks.length; i++){
    let task = allTasks[i];
    task.addEventListener("click", function(event){
        let selectedTask = document.querySelector(".selected");
        if (task.localName === "li"){
            if (selectedTask !== null){
                selectedTask.classList.remove("selected");
            }
            event.target.classList.add("selected");
            selectedTask.backgroundColor = "rgb(128, 128, 128)";          
        };        
    });
};
//Clique duplo risca tarefa
for (let i = 0; i < allTasks.length; i++){
    let task = allTasks[i];
    task.addEventListener("dblclick", function(event){
        let completedTask = document.querySelector(".completed");
        if (event.target.localName === "li"){
            if (completedTask !== null){
                completedTask.classList.remove("completed");
            }
            event.target.classList.add("completed");           
        };
    });
}
//Botão apaga-tudo
let eraseAll = document.getElementById("lista-tarefas");
let listNumber = 3;
document.addEventListener("click", function(event){    
    for (let i = 0; i < listNumber; i++){    
    if (event.target.id === "apaga-tudo"){
            eraseAll.removeChild(eraseAll.childNodes[0]);          
        };
    }  
});

//Botão remover-finalizados

//Botão remover-selecionado