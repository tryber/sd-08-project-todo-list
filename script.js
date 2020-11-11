let buttongraber = document.getElementById("criar-tarefa")
let inputfield = document.getElementById('texto-tarefa')
let container = document.getElementsByClassName("container")
let listadetarefas = document.getElementById('lista-tarefas')
let completed = document.getElementsByClassName ('.completed')

buttongraber.addEventListener('click', function(){
    let paragrafo = document.createElement('li')
    paragrafo.innerText=inputfield.value
    listadetarefas.appendChild(paragrafo)
    inputfield.value=''
    paragrafo.addEventListener('click', function(){
        paragrafo.style.backgroundColor ='rgb(128, 128, 128)'
     paragrafo.addEventListener('dblclick', function(){
         paragrafo.style.classname = "completed"
            })

        })
           })
