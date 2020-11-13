let caixaTexto = document.getElementById("texto-tarefa");
let adicionado = document.getElementById("lista-tarefas");
let btnAdiciona = document.querySelector('#criar-tarefa');
let listagem = document.querySelector('#lista-tarefas');

btnAdiciona.addEventListener('click', function(){
    let crialista = document.createElement('li');
    crialista.innerText = caixaTexto.value + ';';
    listagem.appendChild(crialista);
    caixaTexto.value= " ";
})
