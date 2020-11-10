//Requisito 5 e 6
//usei o site cursos.alura.com.br/forum/topico-como-resolvo-o-problema-object-htmlinputelement-no-meu-codigo-78324 para aprender sobre o 'value'
const captureInput = document.getElementById('texto-tarefa');
const captureListOl = document.getElementById('lista-tarefas'); 
//capturar o 'button criar-tarefa' e criar um evendo de 'click'
const captureButton = document.getElementById('criar-tarefa');
captureButton.addEventListener('click', addText);
function addText () {
    //criar a li e colocá-la como filha da minha lista 'ol'  
    const liTask = document.createElement('li');
    //pegar o texto digitado no input e colocá-lo como texto no li
    liTask.innerText = captureInput.value;
    captureListOl.appendChild(liTask);
    captureInput.value = '';
    liTask.style.backgroundColor = 'rgb(128, 128, 128)';

};




//requisito 7
//capturar a lista ol
//criar um evento onde ao se clicar na lista a cor de fundo seja alterad

//usar o event.target









