let btn = document.getElementById('criar-tarefa');
let texto = document.getElementById('texto-tarefa');
let list = document.getElementById('lista-tarefas');

btn.addEventListener('click', function () {
    var lista = list.innerHTML;
    lista = lista + "<li>" + texto + "</li>";
    list.innerText = lista;



})