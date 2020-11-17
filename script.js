//Insere texto na ul
let allTasks = "";
let list = document.querySelector("#lista-tarefas");
document.addEventListener("click", function(event){
    if (event.target.id === "criar-tarefa"){
    let text = document.querySelector("#texto-tarefa").value;
    let newItem = document.createElement('li');
    newItem.innerHTML = text;
    //newItem.className = "listItem";
    list.appendChild(newItem);
    document.getElementById("texto-tarefa").value = "";
    
    //Clique colore tarefa
    newItem.addEventListener("click", function(event){
        let selectedTask = document.querySelector(".selected");
        if (newItem.localName === "li"){
            if (selectedTask !== null){
                selectedTask.classList.remove("selected");
            }
            event.target.classList.add("selected");
        };
    });

    //Clique duplo risca tarefa
    for (let i = 0; i < allTasks.length; i++){
        let task = allTasks[i];
        task.addEventListener("dblclick", function(event){
            let completedTask = document.querySelector(".completed");
            if (event.target.localName === "li"){
                if (completedTask.className === "completed" ){
                    completedTask.classList.remove("completed");
                }else {
                event.target.classList.add("completed");
                }           
            };
        });
    }

    }
});


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
});