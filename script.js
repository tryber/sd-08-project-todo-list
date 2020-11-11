function createButton(nome, id) {
    let btn = document.createElement('button');
    btn.innerHTML = nome;
    btn.id = id;

    document.getElementById('button-container').appendChild(btn);    
}

createButton('Criar Tarefa', 'criar-tarefa');
createButton('Apaga Tudo', 'apaga-tudo');
createButton('Remover Finalizados', 'remover-finalizados');
