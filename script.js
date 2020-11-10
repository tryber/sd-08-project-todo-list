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

        let valueInput = input.value;
        let liOrdered = document.createElement("li");
        liOrdered.innerHTML = valueInput;
        olOrdered.appendChild(liOrdered);
        input.value = "";
    });

}
addListTodo();
