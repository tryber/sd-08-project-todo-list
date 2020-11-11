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
            getLista.appendChild(newLi);
            getText.value = '';
        }
    })
}



function selectTarefa() {
    let getOl = document.getElementById('lista-tarefas');
    const colorGray = `rgb(${128}, ${128}, ${128})`;
    getOl.addEventListener('mouseenter', function (event) {
        let getLi = document.querySelectorAll('li');
        for (let i = 0; i < getLi.length; i += 1) {
            getLi[i].addEventListener('click', function(event) {
                event.target.style.background = colorGray;
                getLi.forEach(function(e, index, arr) {
                    e.removeAttribute('style')
                });
                event.target.style.backgroundColor = colorGray;
            })
        }
    })
}

window.onload = function () {
    addTarefa();
    selectTarefa();
}
