let buttongraber = document.getElementById("criar-tarefa")
let button2 = document.getElementById('apaga-tudo')
let inputfield = document.getElementById('texto-tarefa')
let container = document.getElementsByClassName("container")
let listadetarefas = document.getElementById('lista-tarefas')
let completed = document.getElementsByClassName ('.completed')

function todo(event) {
    let paragrafo = document.createElement('li')
    paragrafo.innerText=inputfield.value
    paragrafo.className = 'task'
    listadetarefas.appendChild(paragrafo)
    inputfield.value=''

}
    buttongraber.addEventListener('click', todo)

function selecting (event) {
  let tasks = document.getElementsByClassName ('task')
  for ( let index =0; index < tasks.length; index +=1) {
      if( tasks[index].style.backgroundColor !== null ) {
        tasks[index].style.backgroundColor = 'white'
      }

  }
  event.target.style.backgroundColor = 'rgb(128,128,128)'
}
listadetarefas.addEventListener('click', selecting)



function lineThrough (event) {
let tasks = document.getElementsByClassName('task') 
  for (let index = 0; index < tasks.length; index +=1) {
    event.target.classList.toggle('completed')
  }

}
listadetarefas.addEventListener('dblclick', lineThrough)

function  eraseAll () {
  let listadetarefas = document.getElementById('lista-tarefas')
  if (listadetarefas.parentNode){
    listadetarefas.parentNode.removeChild(listadetarefas)
  }
}
button2.addEventListener('click', eraseAll)


