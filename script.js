function createTasks () {
    let textBox = document.getElementById('texto-tarefa');
    let list = document.getElementById('lista-tarefas');
    listChild = document.createElement('li');
    listChild.className = 'ordened-list'
    list.appendChild(listChild);
    let newText = textBox.value;
    listChild.innerText = newText;
    textBox.value = "";
    listChild.addEventListener('click', function(event){
        

        event.target.style.backgroundColor = "rgb(128, 128, 128)";
    });    
    

}

function completed (event) {
    let element = event.target;
    
    if (element.classList.contains('completed')) {
        event.target.classList.remove('completed');

    } else {
        element.classList.add('completed')
    }
}


listaOl = document.getElementById('lista-tarefas');
listaOl.addEventListener('dblclick', completed);



let button = document.getElementById('criar-tarefa');
button.addEventListener('click', createTasks);


let clearButton = document.getElementById('apaga-tudo');

function clearAll() {
    let olList = document.getElementById('lista-tarefas');
    olList.innerText = "";    

}

clearButton.addEventListener('click', clearAll);

