document.querySelector('#criar-tarefa').addEventListener('click', adicionarTarefa);
function addTarefa(text) {
  // Cria o Span e a div da Tarefa

  let liNew = document.createElement('li');
  liNew.innerHTML = text;

  let lista = document.querySelector('#lista-tarefas');
  lista.appendChild(liNew);


  liNew.addEventListener('click', function (item) {
    // Funçao que altera a cor do item caso selecionado
    let checkSelected = document.querySelector('.selected')
    if(checkSelected) {
      checkSelected.className = '';
      checkSelected.style.backgroundColor = '';
    }
    item.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
    item.target.className = 'selected';
    })
}
function adicionarTarefa(){
  //Adicionar nova Tarefa
  let textInput = document.querySelector('#texto-tarefa').value;
  if(textInput == null || textInput == ''){
    return  alert('Favor Preencher com alguma Tarefa.');
  }
  addTarefa(textInput);
  textInput = document.querySelector('#texto-tarefa').value = '';
}
