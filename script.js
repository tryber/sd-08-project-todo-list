function createButton(nome, id) {
    let btn = document.createElement('button');
    btn.innerHTML = nome;
    btn.id = id;

    document.getElementById('button-container').appendChild(btn);    
}

createButton('Criar Tarefa', 'criar-tarefa');
document.getElementById('criar-tarefa').addEventListener('click', fCriarTarefa);
createButton('Apaga Tudo', 'apaga-tudo');
document.getElementById('apaga-tudo').addEventListener('click', fApagaTudo);
createButton('Remover Finalizados', 'remover-finalizados');
document.getElementById('remover-finalizados').addEventListener('click', fRemoverFinalizados);
createButton('Salvar Tarefas', 'salvar-tarefas');
createButton('Mover para Cima', 'mover-cima');
createButton('Mover para Baixo', 'mover-baixo');
createButton('Remover Selecionado', 'remover-selecionado');

function fCriarTarefa() {
console.log('btn criar tarefa');
let novaTarefa = document.createElement('li');
let tarefaInput = document.getElementById('texto-tarefa').value;
novaTarefa.innerHTML = tarefaInput;

document.getElementById('lista-tarefas').appendChild(novaTarefa);
}
//input conhecimento retirado do vídeo (https://www.youtube.com/watch?v=ZGMJqxIkAb0)
function fApagaTudo() {
console.log('btn apaga tudo');
}

function fRemoverFinalizados() {
console.log('btn remove finalizados');
}

