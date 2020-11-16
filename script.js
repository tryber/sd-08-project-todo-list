const inputTxt = document.querySelector('#texto-tarefa');
const tarefaList = document.querySelector('#lista-tarefas');
addEventListener('click', (event) => {
    if(event.target.id == 'criar-tarefa'){
        let li = document.createElement('li');
        li.className = 'item'
        li.innerText = inputTxt.value;
        tarefaList.appendChild(li);
        inputTxt.value = '';
    }
    else if(event.target.className == 'item'){
        for(key = 0; key < tarefaList.children.length; key++){
            if(tarefaList.children[key].className == 'item itemSelected'){
                tarefaList.children[key].className = 'item';
            };
        };
        event.target.classList.add('itemSelected')
}
})