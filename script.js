function criaTarefa() {
  let listTask = document.createElement("li");
  let orderedTask = document.querySelector("#lista-tarefas");
  let task = document.querySelector("#texto-tarefa");

  listTask.innerHTML = task.value;
  orderedTask.appendChild(listTask);
  task.value = "";
}
let addButton = document.getElementById("criar-tarefa");
addButton.addEventListener("click", criaTarefa);




function alterarBackground(e) {
    let lista = document.querySelectorAll('li');
    if (e.target.className !== 'selecionado') {
        for (let index = 0; index < lista.length; index++) {
            lista[index].classList.remove('selecionado');
        }
        e.target.classList.add('selecionado');
    } else if (e.target.className === 'selecionado') {
        e.target.classList.remove('selecionado');
    }
   
}
let listaTarefa = document.querySelector('#lista-tarefas');
listaTarefa.addEventListener('click',alterarBackground);

function riscar(e){
    /*let lista = document.querySelectorAll('li');
    if (e.target.className !== 'completed') {
    for (let index = 0; index < lista.length; index++) {
        lista[index].classList.remove('completed');
        }
        e.target.className = 'completed';
    } else if (e.target.className === 'completed') {
        e.target.classList.remove('completed');
    }*/
    e.target.classList.toggle('completed')
}
listaTarefa.addEventListener("dblclick", riscar);



