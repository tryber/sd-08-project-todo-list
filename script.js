localStorage.setItem('idInitial', 0)

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


/* localStorage.clear() */

