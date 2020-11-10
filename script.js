// Botão Adiciona Tarefa
function adicionaTarefa(){
    let input = document.getElementById('texto-tarefa');
    const button = document.getElementById('criar-tarefa');
    const ol = document.getElementById('lista-tarefas');

    button.addEventListener('click', function() {
        const li = document.createElement("li");
        li.innerHTML = input.value;
        ol.appendChild(li); 
        input.value = '';
    })    
}

adicionaTarefa();
