let body = document.querySelector("body");
let header = document.createElement("header");
header.innerHTML = "Minha Lista de Tarefas";
body.append(header);

let p = document.createElement("p");
p.id = "funcionamento";
p.innerHTML = "Clique duas vezes em um item para marcá-lo como completo";
header.appendChild(p);

let divInput = document.createElement("div");
body.appendChild(divInput);
let input = document.createElement("input");
input.id = "texto-tarefa";
divInput.appendChild(input);

let olOrdered = document.createElement("ol");
olOrdered.id = "lista-tarefas";

divInput.appendChild(olOrdered);

let button = document.createElement("button");
button.id = "criar-tarefa";
button.innerHTML = "Adicionar";
divInput.appendChild(button);

function addListTodo(){
    button.addEventListener("click", function(){
        if(input.value !== ""){
            let valueInput = input.value;
            let liOrdered = document.createElement("li");
            liOrdered.innerHTML = valueInput;
            liOrdered.className = "class";
            olOrdered.appendChild(liOrdered);
            input.value = "";
        }else{
            alert("Favor inserir uma tarefa!");
        }        
    });
}
addListTodo();

let olColor = document.querySelector("#lista-tarefas");
let removeOl = olColor.childNodes;

function removeListColor(){
    for(let index=0; index<removeOl.length; index++){
        if(removeOl[index].style.backgroundColor == "rgb(128, 128, 128)"){
            removeOl[index].style.backgroundColor = "white";
        }
    }
}

function listColor(){
    olColor.addEventListener("click", function(event){          
        removeListColor();            
        
        event.target.style.backgroundColor = "rgb(128, 128, 128)";        
    });

    olColor.addEventListener("dblclick", function(event){
        if (event.target.className == "class"){
            event.target.className = "completed";                          
        }else {
            event.target.className = "class"
        }             
    })
}
listColor();

let buttonClear = document.createElement("button");
buttonClear.id = "apaga-tudo";
buttonClear.innerHTML = "Limpar Lista";
divInput.appendChild(buttonClear);

function listClear(){
    buttonClear.addEventListener("click", function(){

        olOrdered.innerHTML = "";

    });
}
listClear();

let buttonRemove = document.createElement("button");
buttonRemove.id = "remover-finalizados";
buttonRemove.innerHTML = "Limpar Completos";
divInput.appendChild(buttonRemove);

function listRemove(){
    buttonRemove.addEventListener("click", function(){
        
        let completed = document.querySelectorAll(".completed");

        for(let index=0; index<completed.length; index++){
            olOrdered.removeChild(completed[index]);
        }
    });    
}
listRemove();

