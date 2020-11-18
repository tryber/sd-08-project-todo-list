let orderedList = [];
let createList = document.getElementById("lista-tarefas");
for(let index = 0; index < 3; index += 1) {
    let newList = orderedList[index];
    let listItens = document.createElement("li");
    listItens.innerHTML = newList;
    createList.appendChild(listItens);
}