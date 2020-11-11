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
    liTask.className = 'colorDefault';
    captureListOl.appendChild(liTask);
    captureInput.value = '';
};

//requisito 7 e 8 - inicialmente fiz numa função separada para os 2 requisitos, mas uni numa função para facilitar a construção

function color () {
    const captureListOl = document.getElementById('lista-tarefas'); 
    captureListOl.addEventListener('click', colorAndHighlight);
    
    function colorAndHighlight (event) {
        let captureGrey = document.querySelector('.color');
       //adiciona uma classe 
        if (event.target.className === 'colorDefault') { 
            // se não têm classe vai adicionar a classe color, e se já têm a classe color vai remover e readicioná-la
            if (captureGrey === null) {
                event.target.classList.add('color');
            } else {
                captureGrey.classList.remove('color');
                event.target.classList.add('color');
            }
        }
      }
    }
color ();






   

    










/*
//requisito 9
//mesma lógica do exercicio 5 do dia 5.3 
captureListOl.addEventListener('dblclick', scratched);
function scratched (event) {
    if (event.target.className == 'completed') {
        event.target.className.remove('completed');
    } else {
        event.target.className = 'completed';
    }
}
*/







