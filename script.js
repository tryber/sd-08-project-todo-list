const listaTarefa = document.createElement('ol')

// criar li dinamicamente
window.onload = function(){  
  document.body.appendChild(listaTarefa)
  listaTarefa.id = 'lista-tarefa'  
}

function addTask(){  
  let novaTarefa = document.createElement('li')
  novaTarefa.innerText = document.getElementById('texto-tarefa').value
  listaTarefa.appendChild(novaTarefa)
  document.getElementById('texto-tarefa').value = ""

  console.log(listaTarefa)
}




// dblclick no li faz text-decoration line-through solid rgb (0,0,0)
