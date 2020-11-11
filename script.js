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

function eventColor (event) {
    const colorGray = `rgb(${128}, ${128}, ${128})`;
    let getOl = document.getElementById('lista-tarefas');
    let getLi = document.querySelectorAll('.list-iten');

    if(getOl !== event.target){
        let estado = event.target.hasAttribute('style');
        getLi.forEach(function (el) {
            el.removeAttribute('style')
            console.log(el);
        })
        if (!estado) {
            event.target.style.backgroundColor = colorGray;
        }
    }
}

//SELECIONA TAREFA
function selectTarefa() {
    let getOl = document.querySelector('#lista-tarefas');
    getOl.addEventListener('click', eventColor);
}

//RISCANDO TAREFA


window.onload = function () {
    addTarefa();
    selectTarefa();
}
