let body = document.querySelector("body");
let header = document.createElement("header");
header.innerHTML = "Minha Lista de Tarefas";
body.append(header);

let p = document.createElement("p");
p.id = "funcionamento";
p.innerHTML = "Clique duas vezes em um item para marcá-lo como completo";
header.appendChild(p);
