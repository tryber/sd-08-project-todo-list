const buttonCreat  = document.getElementById('criar-tarefa');
buttonCreat.addEventListener('click', function() {
  let task = document.createElement('li');
  let taskText = document.getElementById('texto-tarefa');
  let text =document.createTextNode(taskText.value);
  taskText.value = "";
  task.appendChild(text);
  document.getElementById('lista-tarefas').appendChild(task)
});

let task = document.getElementsByTagName('li');
const buttonRemove  = document.getElementById('apaga-tudo');
buttonRemove.addEventListener('click', function () {
console.log('Tenho ' + task.length + ' itens na lista')
  for(let i=0; i<task.length; i+=1){
    // let apaga = ;
    task[i].remove();
    console.log(i);
  }
});

const lista = document.getElementById('lista-tarefas')
lista.addEventListener('click', function (event){
  let selectedItem = document.getElementsByClassName('selected')
  console.log(selectedItem.length)
  if( event.target.tagName === 'LI'){
    if( selectedItem.length >= 1 ){
      selectedItem[0].className = "";
    }
    event.target.className = 'selected';
  }
});

const complet = document.getElementById('lista-tarefas')
complet.addEventListener('dblclick', function (event){
  let selectedItem = document.getElementsByClassName('selected')
  console.log(selectedItem.length)
  if ( event.target.tagName === 'LI'){
    if ( selectedItem.length >= 1 ){
      selectedItem[0].className = "";
    }
    if ( event.target.className ==='completed'  ){
      event.target.className = "";
    } else {
      event.target.className = 'completed';
    }
  }
});
