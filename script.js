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
    })    

}

let button = document.getElementById('criar-tarefa');
button.addEventListener('click', createTasks);



