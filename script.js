localStorage.setItem('idInitial', 0)

function limpar(){
  let texto = document.getElementById('texto-tarefa')

  texto.value = ''
}

function salvarTexto(){
  let texto = document.getElementById('texto-tarefa').value
  let lista = document.getElementById('lista-tarefas')

  var identificador = localStorage.length
  localStorage.setItem(identificador, texto)

  let newLi = document.createElement('li')
  newLi.className = 'item'
  lista.appendChild(newLi)
  newLi.innerHTML = localStorage.getItem(identificador)

  paint()
  limpar()
  completed()

}

function escrever() {
  let lista = document.getElementById('lista-tarefas')

  for(i = 1; i < localStorage.length; i++){
    let newLi = document.createElement('li')
    newLi.className = 'item'
    lista.appendChild(newLi)
    newLi.innerHTML = localStorage.getItem(i)
  }

}
escrever()

function paint() {
  let listItem = document.querySelectorAll('.item')

  for(i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', (event)=>{

      for(i = 0; i < listItem.length; i++){
        let item = listItem[i]
        item.style.backgroundColor = 'white'
      }

      event.target.style.backgroundColor = 'rgb(128,128,128)'
    })
  }
}
paint()

function completed(){
  let listItem = document.querySelectorAll('.item')

  for(i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('dblclick', (event)=>{

      event.target.classList.toggle('completed')
    })
  }
}
completed()

function removerCompletados(){
  let listItem = document.querySelectorAll('.item')

  console.log('removendo')
  for(i = 0; i < listItem.length; i++) {

    if(listItem[i].className === 'item completed'){
      listItem[i].remove()
      localStorage.removeItem(i + 1)

    }else{
      console.log('nem vem')
    }
  }

}

function apagarTudo(){
  localStorage.clear()
  document.location.reload()
}

/* localStorage.clear() */

