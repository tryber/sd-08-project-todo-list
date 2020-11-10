function criarTarefa() {
 const botaoTarefa = document.getElementById('criar-tarefa');
 botaoTarefa.addEventListener('click', function (){
  let tarefa = document.createElement('li');
   let input = document.getElementById('texto-tarefa');
   tarefa.innerText = input.value;
   tarefa.classList.add('tarefa');
   tarefa.addEventListener('dblclick', mudaClasseCompleted);
   tarefa.addEventListener('click', mudaClasseSelecionada);
   let lista = document.getElementById('lista-tarefas');   
   lista.appendChild(tarefa);
   input.value = '';  
   selecionaTarefa();   
 }) 
 }
criarTarefa();



/*function selecionaTarefa() {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tarefas.length; index += 1){
    tarefas[index].addEventListener('click', mudaClasseSelecionada);    
  }*/

  function mudaClasseSelecionada(event){
    let tarefas = document.querySelectorAll('.tarefa');
    for (let index = 0; index < tarefas.length; index += 1){
      //tarefas[index].className = 'tarefa';
      tarefas[index].classList.remove('selecionada');
      event.target.classList.add('selecionada');
    }  
  }  


/*function completaTarefa(){
  let tasks = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tasks.length; index += 1){
    tasks[index].addEventListener('dblclick', mudaClasseCompleted);
  }*/

  function mudaClasseCompleted(event){
      if(event.target.classList.contains('completed')){
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
  }


function apagaTudo(){
  const botaoApagaTudo = document.getElementById('apaga-tudo');
  botaoApagaTudo.addEventListener('click', deletaItems);
  function deletaItems(){
    let lista = document.getElementById('lista-tarefas');
    lista.innerHTML = '';    
  }
}
apagaTudo();

/*
function completaTarefa() {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tarefas.length; index += 1){
    tarefas[index].addEventListener('dblclick', mudaClasseCompleted);
  }
  function mudaClasseCompleted(event){
    for (let index = 0; index < tarefas.length; index += 1){
          event.target.classlist.toggle('completed');
    }
  }
}

*/


