function createButton(nome, id) {
  let btn = document.createElement('button');
  btn.innerHTML = nome;
  btn.id = id;

  document.getElementById('button-container').appendChild(btn);    
}

createButton('Criar Tarefa', 'criar-tarefa');
document.getElementById('criar-tarefa').addEventListener('click', fCriarTarefa);
createButton('Apaga Tudo', 'apaga-tudo');
document.getElementById('apaga-tudo').addEventListener('click', fApagaTudo);
createButton('Remover Finalizados', 'remover-finalizados');
document.getElementById('remover-finalizados').addEventListener('click', fRemoverFinalizados);
createButton('Salvar Tarefas', 'salvar-tarefas');
createButton('Mover para Cima', 'mover-cima');
createButton('Mover para Baixo', 'mover-baixo');
createButton('Remover Selecionado', 'remover-selecionado');

function fCriarTarefa() {
  let novaTarefa = document.createElement('li');
  let tarefaInput = document.getElementById('texto-tarefa').value;
  novaTarefa.className = 'classeTarefa';
  novaTarefa.innerHTML = tarefaInput;
  
  //ID elementos:
  let ol = document.getElementById('lista-tarefas');
  tarefaId = ol.childElementCount;  
  novaTarefa.id = tarefaId;
   
  document.getElementById('lista-tarefas').appendChild(novaTarefa);

  fLimparImput();
}

function fLimparImput(){
  tarefaInput = document.getElementById('texto-tarefa').value='';
}

function fApagaTudo() {
  let tarefa = document.querySelectorAll('li');
  for (index of tarefa) {
      let listaOl = document.querySelector('#lista-tarefas');
      console.log(listaOl);
      listaOl.removeChild(index);
  }
}

function umCliqueTarefa () {
  
}


function fRemoverFinalizados() {
  console.log('btn remove finalizados');
}



//Conhecimento aprendido nos sites: (https://www.w3schools.com/jsref/prop_element_childelementcount.asp),((https://www.youtube.com/watch?v=ZGMJqxIkAb0))