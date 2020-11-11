//ADICIONA TAREFA NA LISTA
function addTarefa() {
    let getText = document.querySelector('#texto-tarefa');
    let getLista = document.querySelector('#lista-tarefas');
    let getButton = document.querySelector('#criar-tarefa');

    getButton.addEventListener('click', function () {
        if (getText.value === '') {
            alert('ERRO!')
        } else {
            let newLi = document.createElement('li');
            newLi.innerText = getText.value;
            newLi.className = 'list-iten'
            getLista.appendChild(newLi);
            getText.value = '';
        }
    })
}

function eventColor (ev, value) {
    let getLi = document.querySelectorAll('.list-iten');
    let estado = ev.target.hasAttribute('style');
    
    getLi.forEach((el) => el.removeAttribute('style'));

    if(!estado){
        ev.target.style.backgroundColor = value;
    }
}

//SELECIONA TAREFA
function selectTarefa() {
    let getOl = document.querySelector('#lista-tarefas');
    let color = `rgb(${128}, ${128}, ${128})`;
    getOl.addEventListener('click', function(e) {
        console.log(e.target)
        if(e.target.classList.contains( 'list-iten' )){
            eventColor(e, color);
        }
    })
    
}

//RISCANDO TAREFA
function tarefaCompleta() {
    
}


window.onload = function () {
    addTarefa();
    selectTarefa();
    tarefaCompleta()
}
