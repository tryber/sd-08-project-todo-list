/* //Requisito 1
function createTitle(){
    let header = document.getElementsByTagName("header");
    let title = document.createElement("h1");
    title.innerText = "Minha Lista de Tarefas";
    header.appendChild(h1);
}
createTitle();

//Requisito 2
function createParagraph (){
let funcionamento = document.getElementById("funcionamento");
funcionamento.innerText = "Clique duas vezes em um item para marcá-lo como completo";
}
createParagraph(); */

// //Requisito 3
// function createOl (){
//     let lista = document.getElementById("texto-tarefa");
//     let listaOrdenada = document.createElement("ol");
//     listaOrdernada.id = 'lista-tarefas';
//     lista.appendChild(listaOrdenada);
//     console.log(listaOrdenada);
// }
// createOl();

//Requisito 5
function createTask () {
    const btn = document.getElementById('criar-tarefa');

    btn.addEventListener('click', function(){
        let listaOrdernada = document.getElementById('lista-tarefas');
        let textoTarefa = document.getElementById('texto-tarefa');
        let listaNumerada = document.createElement('li');
        listaOrdernada.appendChild(listaNumerada);
        listaNumerada.innerText = textoTarefa.value;
        textoTarefa.value = '';
    });
}
createTask();

function changeColorTask () {
    const listaNumerada = document.querySelector('li');
       
            li.addEventListener('click', function(){
        });
}
changeColorTask();
