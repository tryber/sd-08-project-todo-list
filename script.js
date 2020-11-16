//Requisito 2
document.getElementById("funcionamento").innerText = "Clique duas vezes em um item para marcá-lo como completo";

//Requisito 3
function createOl (){
    let lista = document.getElementById("texto-tarefa");
    let listaOrdenada = document.createElement("ol");
    listaOrdenada.getElementById("lista-tarefas");
    lista.appendChild(listaOrdenada);
}
createOl();

//Requisito 4
function createLi (){
    let listaOrdenada = document.getElementById("lista-tarefas");
    let listaTarefas = [];

    for (index = 0; index < listaTarefas; index += 1){
        let tarefa = listaTarefas[index];

        let listaTarefa = document.createElement("li");
        listaTarefa.innerText = tarefa;

        listaOrdenada.append(listaTarefas);
    }
}
createLi ();