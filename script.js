let buttongraber = document.getElementById("criar-tarefa")
let inputfield = document.getElementById('texto-tarefa')
let container = document.getElementsByClassName("container")
let listadetarefas = document.getElementById('lista-tarefas')

buttongraber.addEventListener('click', function(){
    let paragrafo = document.createElement('li')
    paragrafo.innerText=inputfield.value
    listadetarefas.appendChild(paragrafo)
    inputfield.value=" "
})