const addButton = document.querySelector('#criar-tarefa'); //botao
const inputText = document.querySelector('#texto-tarefa');//onde digita o texto
const taskList = document.querySelector('#lista-tarefas');//ol

addButton.addEventListener('click', sendText);

function sendText () {
    let textList =  document.createElement('li');
    textList.innerText = inputText.value;
    taskList.appendChild(textList);
    inputText.value = "";
}
