const captureInput = document.getElementById('texto-tarefa');
const captureListOl = document.getElementById('lista-tarefas'); 

//Requisito 5 e 6
//usei o site cursos.alura.com.br/forum/topico-como-resolvo-o-problema-object-htmlinputelement-no-meu-codigo-78324 para aprender sobre o 'value'
const captureButton = document.getElementById('criar-tarefa');
captureButton.addEventListener('click', addText);
function addText () {
    //criar a li e colocá-la como filha da minha lista 'ol'  
    const liTask = document.createElement('li');
    //pegar o texto digitado no input e colocá-lo como texto no li
    liTask.innerText = captureInput.value;
    liTask.className = 'listSelector';
    captureListOl.appendChild(liTask);
    captureInput.value = '';
};


//requisito 7 e 8 - 
//inicialmente fiz numa função separada para os 2 requisitos, mas uni para facilitar a construção
function color () {
    captureListOl.addEventListener('click', colorAndHighlight);
    function colorAndHighlight (event) {
        //a ideia é quando um evento seja disparado compare as classes
        let captureGrey = document.querySelector('.color');
        if (event.target.className === 'listSelector') { 
            // se não têm classe vai adicionar a classe color, e se já têm a classe color vai remover e readicioná-la
            // usei classList porque é mais indicado para adicionar/remover classes, se usasse o className ia remover todas as classes - referência teamtreehouse.com/community/difference-between-classlist-and-classname#:~:text=Using%20%22classList%22%2C%20you%20can,wipe%20out%20all%20of%20them).
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


//requisito 9
captureListOl.addEventListener('dblclick', toHighlight);
function toHighlight (event) {
    //se a classe tem o 'nome completed' então será removida caso não tenha ela será adicionada 
    //usei o 'classList' para procurar a partir do clique na 'ol' se existe uma 'completed' dai a comparação é feita com o 'contains' pois ele retorna false/true 
    if (event.target.classList.contains ('completed')) {
        event.target.classList.remove ('completed'); 
    } else {
        event.target.classList.add('completed');
    }    
}

//requisito 10
//a ideia é fazer um laço que vá removendo todas as 'li' criadas
const captureButtonDelete = document.getElementById('apaga-tudo');
captureButtonDelete.addEventListener('click', deleteAll);

function deleteAll () {
    const captureLi = document.querySelectorAll('.listSelector');
    for (let index = 0; index < captureLi.length; index += 1) {
        let count = captureLi[index]
        count.remove();
    }
}
deleteAll ();