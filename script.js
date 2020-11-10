// Definindo variáveis básicas
let buttonsContainer = document.querySelector('.buttons-container');
let list = document.getElementById('lista-tarefas');
let textByUser = document.getElementById('texto-tarefa');

// Criando função para facilitar criação de botões
function createButton(buttonText, typeOfButton, idOfButton ) {
  let button = document.createElement('button');
  button.setAttribute('type','button');
  button.innerHTML = buttonText;
  button.className = 'button';
  button.id = idOfButton
  button.classList.add(typeOfButton);
  buttonsContainer.appendChild(button);
}
// Requisito 5 - Criando evento de adição de texto a caixa de texto;
/*
textByUser.addEventListener('keyup',function () {
  let textByUser = document.getElementById('texto-tarefa');
  let string = textByUser.value
})*/

//Requisito 5 -Criando botão de input e adicionando evento de input
createButton('input', 'input', 'criar-tarefa');
let inputbutton = document.querySelector('.input')
inputbutton.addEventListener('click', function () {
  let list = document.getElementById('lista-tarefas');
  let textByUser = document.getElementById('texto-tarefa');
  let item = document.createElement('li');
  item.className = 'item';
  item.innerHTML = textByUser.value;
  list.appendChild(item);
  textByUser.value ="";
})



