


function newTask () {
  let newTask = document.createElement('Li')
  newTask.innerText = document.querySelector('#texto-tarefa').value
  document.querySelector('#lista-tarefas').appendChild(newTask)
  document.querySelector('#texto-tarefa').value = ""

}


let buttonPushed = document.querySelector('#criar-tarefa')
buttonPushed.addEventListener("click", newTask)

