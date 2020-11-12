    const entrada = document.getElementById('texto-tarefa');

    const botao = document.getElementById('criar-tarefa');

    const listaOrdenada = document.getElementById('lista-tarefas');
    
    botao.addEventListener('click', criarElemento);

    function criarElemento() {
        const itemLista = document.createElement('li');
        itemLista.innerText = entrada.value;
        itemLista.addEventListener('click', corDeFundo);
        listaOrdenada.appendChild(itemLista);
        entrada.value = "";
    }

     function corDeFundo(event) {
        let  linha =document.querySelectorAll('li');
        for (let index = 0; index < linha.length;index += 1){
                linha[index].style.backgroundColor = 'white';
        }
        event.target.style.backgroundColor ='rgb(128,128,128)'
    }