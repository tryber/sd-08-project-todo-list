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
        let listTasks = document.getElementById('lista-tarefas');
        let inputTask = document.getElementById('texto-tarefa');
        let textTasks = document.createElement('li');
        textTasks.addEventListener('click', changeColorTask())
        listTasks.appendChild(textTasks);
        textTasks.className = 'lista-numerada';
        textTasks.innerText = inputTask.value;
        inputTask.value = '';
    });
}
createTask();

function changeColorTask (event) {
    let textTasks = document.getElementsByClassName('lista-numerada');

    for (let index = 0; index < textTasks.length; index += 1){
            textTasks[index].classList.add('selected');
            event.target.style.backgroundColor;
        };
}
changeColorTask();

