//criando botão

function createButton(task){
    const tarefas = document.querySelector('#criar-tarefa');
    let newButton = document.createElement('button');

    newButton.innerHTML = task;
    tarefas.appendChild(newButton);
};
createButton('Task');

    let texto = document.querySelector('#texto-tarefa');
    let clique = document.querySelector('#criar-tarefa');
    let orList = document.querySelector('#lista-tarefas');

    clique.addEventListener('click', function(){
        let elemento = document.createElement('li');
        elemento.innerText = texto.value;
        orList.appendChild(elemento);
        texto.value = '';
    })