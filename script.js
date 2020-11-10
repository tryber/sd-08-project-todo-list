function criarTarefa() {
 const botaoTarefa = document.getElementById('criar-tarefa');
 botaoTarefa.addEventListener('click', function (){
  let tarefa = document.createElement('li');
   let input = document.getElementById('texto-tarefa');
   tarefa.innerText = input.value;
   let lista = document.getElementById('lista-tarefas');   
   lista.appendChild(tarefa);
   input.value = '';
 })
}
criarTarefa();