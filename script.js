let list = document.querySelector("#lista-tarefas");
let buttonAddTask = document.getElementById("criar-tarefa");
buttonAddTask.addEventListener("click", function (event) {
    let text = document.querySelector("#texto-tarefa").value;
    let newItem = document.createElement('li');
    newItem.innerHTML = text;
    //newItem.className = "listItem";
    list.appendChild(newItem);
    document.getElementById("texto-tarefa").value = "";

    //Clique colore tarefa
    newItem.addEventListener("click", function (event) {
        let selectedTask = document.querySelector(".selected");
        if (newItem.localName === "li") {
            if (selectedTask !== null) {
                selectedTask.classList.remove("selected");
            }
            event.target.classList.add("selected");
        };
    });
    //Clique duplo risca tarefa
    newItem.addEventListener("dblclick", function (event) {
        event.target.classList.toggle("completed");
    });
});

//Botão apaga-tudo
let eraseAll = document.querySelector("#lista-tarefas");
document.addEventListener("click", function (event) {
    if (event.target.id === "apaga-tudo") {
        let listNumber = eraseAll.querySelectorAll("li");
        for (let i = 0; i < listNumber.length; i++) {
            listNumber[i].remove();
        }
    }
});

//Botão remover-finalizados
let eraseCompleted = document.querySelector("#lista-tarefas");
document.addEventListener("click", function (event) {
    if (event.target.id === "remover-finalizados") {
        let listNumber = eraseCompleted.querySelectorAll(".completed");        
        for (let i = 0; i < listNumber.length; i++) {
            listNumber[i].remove();
        }
    }
});

//Botão remover-selecionado
let eraseSelected = document.querySelector("#lista-tarefas");
document.addEventListener("click", function (event) {
    if (event.target.id === "remover-selecionado") {
        let listNumber = eraseSelected.querySelectorAll(".selected");        
        for (let i = 0; i < listNumber.length; i++) {
            listNumber[i].remove();
        }
    }
});