//Insere texto na ul
let allTasks = "";
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
let buttonRemoveAll = document.getElementById("apaga-tudo");
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
document.addEventListener("click", function (event) {
    if (event.target.id === "remover-finalizados") {
        if (newItem.classList = "completed") {
            newItem.removeChild(newItem.childNodes);
        }
    };
});







/*
//Botão remover-finalizados
let eraseDone = document.getElementById("lista-tarefas");
document.addEventListener("click", function(event){
    for (let i = 0; i < eraseDone.length; i++){
    if (event.target.id === "remover-finalizados"){
        if  (eraseDone[i].classList = "completed"){
            eraseDone.removeChild(eraseDone.childNodes[i]);
        }
        };
    }
});

//Botão remover-selecionado
let eraseSelected = document.getElementById("lista-tarefas");
document.addEventListener("click", function(event){
    for (let i = 0; i < eraseDone.length; i++){
    if (event.target.id === "remover-finalizados"){
        if  (eraseSelected[i].classList = "selected"){
            eraseSelected.removeChild(eraseSelected.childNodes[i]);
        }
        };
    }
});*/