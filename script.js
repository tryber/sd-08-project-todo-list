window.onload = function () {

    let addButton = document.querySelector('#criar-tarefa');
    addButton.addEventListener('click', function (){
        // quando o botao é clicado: 
        // 1. checa se o texto-tarefa tem conteudo > 
        // 2. adiciona o conteudo como uma li na lista-tarefas >
        // 3. apaga o conteudo da caixa de texto .

        let textoTarefa = document.querySelector('#texto-tarefa');

        if (textoTarefa.value) {
            let listaDeTarefas = document.querySelector('#lista-tarefas');
            let tarefa = document.createElement('li');
            tarefa.innerHTML = textoTarefa.value;
            tarefa.className = 'task';
            listaDeTarefas.appendChild(tarefa);
            textoTarefa.value = null;
        }
    })

    addEventListener('click', function (event) {
        let item = event.target;
        if (item.className === 'task') {
            item.style.backgroundColor = 'rgb(128, 128, 128)';
        }
    })
}