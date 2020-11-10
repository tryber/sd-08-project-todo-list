function adicionaTarefa() {
  let listaOrdenada = document.getElementById('lista-tarefas')
  let buttonAdicionar = document.getElementById('criar-tarefa');
  let textoTarefa = document.getElementById('texto-tarefa');
  buttonAdicionar.addEventListener('click', function () {
    let tarefa = document.createElement('li');
    tarefa.innerText = textoTarefa.value;
    listaOrdenada.appendChild(tarefa);
    textoTarefa.value = '';
  });
}
adicionaTarefa();