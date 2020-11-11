const buttonCreat  = document.getElementById('criar-tarefa');
buttonCreat.addEventListener('click', function() {
  let task = document.createElement('li');
  let taskText = document.getElementById('texto-tarefa');
  let text =document.createTextNode(taskText.value);
  taskText.value = "";
  task.appendChild(text);
  document.getElementById('lista-tarefas').appendChild(task)
});


const buttonRemove  = document.getElementById('apaga-tudo');
buttonRemove.addEventListener('click', function () {
  let task = document.querySelectorAll('li');
  for(let i=0; i<task.length; i+=1){
    task[i].remove();
  }
});

const buttonSelected  = document.getElementById('remover-selecionado');
buttonSelected.addEventListener('click', function () {
  let task = document.querySelectorAll('.selected');
  for(let i=0; i<task.length; i+=1){
    task[i].remove();
  }
});

const buttonCompleted  = document.getElementById('remover-finalizados');
buttonCompleted.addEventListener('click', function () {
  let task = document.querySelectorAll('.completed');
  for(let i=0; i<task.length; i+=1){
    task[i].remove();
  }
});


const lista = document.getElementById('lista-tarefas')
lista.addEventListener('click', function (event){
  let selectedItem = document.getElementsByClassName('selected')
  console.log(selectedItem.length)
  if( event.target.tagName === 'LI'){
    if( selectedItem.length >= 1 ){
      if(selectedItem[0].className === "completed selected"){
        selectedItem[0].className = "completed";
      }else {
       selectedItem[0].className = "";
    }}
    if(event.target.className==="completed"){
      event.target.className = 'completed selected';
    } else {
      event.target.className = 'selected';
    }
  }
});

const complet = document.getElementById('lista-tarefas')
complet.addEventListener('dblclick', function (event){
  if ( event.target.tagName === 'LI'){
    if ( event.target.className === 'completed selected'  ){
      event.target.className = "";
    } else {
      event.target.className = 'completed';
    }
  }
});
