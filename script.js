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
        newItem.addEventListener("dblclick", function(event){
            if (newItem.localName === "li" && newItem.className !== "completed"){
                event.target.classList.add("completed");                 
            }
            if (newItem.className === "completed"){
                newItem.classList.remove("completed");
            }                                 
        });        

    //Botão apaga-tudo
        let eraseAll = document.getElementById("lista-tarefas");
        let listNumber = document.querySelectorAll("li");
        document.addEventListener("click", function(event){    
            for (let i = 0; i < listNumber.length; i++){    
            if (event.target.id === "apaga-tudo"){
                    eraseAll.removeChild(eraseAll.childNodes[i]);          
                };
            }  
    });
    //Botão remover-finalizados
        newItem.addEventListener("click", function(event){             
            if (event.target.id === "remover-finalizados"){
                if  (newItem.classList = "completed"){
                    newItem.removeChild(newItem.childNodes);
                }                  
                };              
        });



    }
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