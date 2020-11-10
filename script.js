function criarTarefa() {
 const botaoTarefa = document.getElementById('criar-tarefa');
 botaoTarefa.addEventListener('click', function (){
  let tarefa = document.createElement('li');
   let input = document.getElementById('texto-tarefa');
   tarefa.innerText = input.value;
   tarefa.classList.add('tarefa');
   let lista = document.getElementById('lista-tarefas');   
   lista.appendChild(tarefa);
   input.value = '';
   selecionaTarefa();
 }) 
 }
criarTarefa();

function selecionaTarefa() {
  const tarefas = document.querySelectorAll('.tarefa');  
  for (let index = 0; index < tarefas.length; index += 1){
    tarefas[index].addEventListener('click', mudaClasse);
  }
  function mudaClasse(event){
    for (let index = 0; index < tarefas.length; index += 1){
      tarefas[index].className = 'tarefa';
      event.target.className = 'tarefa selecionada';  
    }  
  }
}
