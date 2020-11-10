function addTarefa() {
    let getText = document.querySelector('#texto-tarefa');
    let getLista = document.querySelector('#lista-tarefas');
    let getButton = document.querySelector('#criar-tarefa');

    getButton.addEventListener('click', function() {
        if(getText.value === ''){
            alert('ERRO!')
        }else{
            let newLi = document.createElement('li');
            newLi.innerText = getText.value;
            getLista.appendChild(newLi);
            getText.value = '';      
        }
    })
}

addTarefa();