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
        // Quando uma task é clicada, 
        // passa a ter a classe '.selected', 
        // o que altera seu backgroundColor
        // se outra task for clicada, anterior perde a classe '.selected'

        let item = event.target;
        let ultimoItem = document.querySelector('.selected');

        if (ultimoItem !== null) {
            let classes = ultimoItem.className.split(' ');
            classes.splice(classes.indexOf('selected'), 1)
            ultimoItem.className = classes.join(' ')
        }

        if (item.classList.contains('task')) {
            item.className += ' selected';
        }
    })

    addEventListener('dblclick', function (event) {
        // Se o item estiver riscado e for clicado duas vezes, desrisca
        // se ele não estiver riscado, risca

        let item2 = event.target;

        if (item2.classList.contains('completed') && item2.classList.contains('task')) {
            let classes = item2.className.split(' ');
            classes.splice(classes.indexOf('completed'), 1);
            item2.className = classes.join(' ');
        } else if (item2.classList.contains('task')) {
            item2.className += ' completed';
        }
    })

    let clearButton = document.querySelector('#apaga-tudo');
    clearButton.addEventListener('click', function () {
        // limpa todas as tasks ao clicar em 'limpar'

        let listaDeTarefas = document.querySelector('#lista-tarefas');
        let itensDaLista = document.querySelectorAll('.task');
        if (itensDaLista.length > 0) {
            for (let i = 0; i < itensDaLista.length; i += 1) {
                listaDeTarefas.removeChild(itensDaLista[i])
            }
        }
    })

    
}