// Definindo variáveis básicas
const buttonsContainer = document.querySelector('.buttons-container');
const list = document.getElementById('lista-tarefas');
let itemLength = 0;
let item = document.getElementsByClassName('item');
//
// Criando função para facilitar criação de botões
//
function createButton(buttonText, typeOfButton, idOfButton) {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.innerHTML = buttonText;
  button.className = 'button';
  button.id = idOfButton;
  button.classList.add(typeOfButton);
  buttonsContainer.appendChild(button);
}
//
// Requisito 5 e 6 - Criando botão de input e adicionando evento de input
//
createButton('input', 'input', 'criar-tarefa');
const inputbutton = document.querySelector('.input');
inputbutton.addEventListener('click', function () {
  const textByUser = document.getElementById('texto-tarefa');
  const item = document.createElement('li');
  item.className = 'item';
  item.innerHTML = textByUser.value;
  list.appendChild(item);
  textByUser.value = '';
  itemLength += 1;
});
//
// Requisito 7- Adicionando evento para mudança de background
//
function clickOnList() {
  for (let i = 0; i < itemLength; i += 1) {
    item[i].addEventListener('click', function () {
      item[i].style.backgroundColor = 'rgb(128,128,128)';
      let index = i;
      for (let j = 0; j < itemLength; j += 1){
        if (j !== index) {
          item[j].style.backgroundColor = '';
        }
      }
    });
  }
}
//
// Requisitos 9 - Adicionando evento de double click para alterar classe do item selecionado
//
function doubleClickOnList() {
  for (let i = 0; i < itemLength; i += 1) {
    item[i].addEventListener('dblclick', function() {
      const classOfItemDoubleClicked = document.getElementsByClassName('item')[i].className;
      if (classOfItemDoubleClicked === 'item') {
        item[i].classList.add('completed');
      }
      if (classOfItemDoubleClicked === 'item completed'){
        item[i].className = 'item';
      }
    });
  }
}
//
// Adicionando evento para chamar funções com tamanho de lista de items itemLength atualizado
list.addEventListener('mouseenter', function () {
  clickOnList();
  doubleClickOnList();
});
