function createTasks () {
    let textBox = document.getElementById('texto-tarefa');
    let list = document.getElementById('lista-tarefas');
    listChild = document.createElement('li');
    listChild.className = 'ordened-list'
    list.appendChild(listChild);
    let newText = textBox.value;
    listChild.innerText = newText;
    textBox.value = "";    

}


let button = document.getElementById('criar-tarefa');
button.addEventListener('click', createTasks);

//requisito 7
function changeColor(){
    listChild.style.backgroundColor = "rgb(128,128,128)";
}

listChild.addEventListener('click', changeColor);




