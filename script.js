let valorDigitado = document.getElementById('texto-tarefa').innerHTML;

function adicionarTarefa(valor){
    let olTag = document.getElementById('lista-tarefas');
    let liTag = document.createElement('li');
    liTag.innerHTML = valor;
    olTag.appendChild(liTag);
}
adicionarTarefa(valorDigitado);

addEventListener('click', adicionarTarefa)