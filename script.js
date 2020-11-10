let botaoAdd = document.querySelector("#criar-tarefa")
let caixaTexto = document.querySelector("#texto-tarefa")
var tarefas = document.querySelector("#lista-tarefas")
botaoAdd.addEventListener('click', function(){
  let tarefa = document.createElement('li');
  tarefa.className = 'tarefasLi'
  tarefas.appendChild(tarefa);
  tarefa.innerHTML = caixaTexto.value;
  caixaTexto.value = "";
})