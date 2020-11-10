function newTask () {
  let newTask = document.createElement('Li')
  newTask.innerText = document.querySelector('#texto-tarefa').value
  document.querySelector('#lista-tarefas').appendChild(newTask)
  document.querySelector('#texto-tarefa').value = ""
}

let buttonPushed = document.querySelector('#criar-tarefa')
buttonPushed.addEventListener("click", newTask)

let getTasks = document.getElementById('lista-tarefas')
getTasks.addEventListener('click', changeBackground)

function changeBackground (e) {
  //console.log(e.target)


  let allNodes = document.querySelectorAll('li').length

  for (let index = 0; index < allNodes; index += 1) {

    if (document.querySelectorAll('li')[index].style.backgroundColor == 'rgb(128, 128, 128)')  {
       document.querySelectorAll('li')[index].style.removeProperty('background-color')
    }
  }

  e.target.style.backgroundColor = "rgb(128, 128, 128)"

}

