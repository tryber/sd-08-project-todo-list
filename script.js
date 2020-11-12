let tarefaSelecionada;

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

  //verificação valor em branco.
  if (tarefaInput === "") {
    alert('Favor digitar uma tarefa!');
  } else {
  novaTarefa.className = 'classeTarefa';
  novaTarefa.innerHTML = tarefaInput;
  
  //ID elementos:
  let ol = document.getElementById('lista-tarefas');
  tarefaId = ol.childElementCount;  
  novaTarefa.id = tarefaId;
   
  document.getElementById('lista-tarefas').appendChild(novaTarefa);

  novaTarefa.addEventListener('click', umCliqueTarefa);

  fLimparImput();
  }
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
//seleciona cor cinza apenas no elemento clicado.
function umCliqueTarefa () {
  idTarefa = this.id;
  let tarefaAtual = document.getElementById(idTarefa);
  let todasTarefas = document.getElementsByClassName('classeTarefa');
  let corPadrao = 'white';
  let corselecao = 'rgb(128,128,128)';
  console.log(todasTarefas);

  for (let index = 0; index < todasTarefas.length; index += 1) {
    todasTarefas[index].style.backgroundColor = corPadrao; 
    console.log(todasTarefas[index]);  
  }
 
  tarefaAtual.style.backgroundColor = corselecao;
}


function fRemoverFinalizados() {
  console.log('btn remove finalizados');
  
}



//Conhecimento aprendido nos sites: (https://www.w3schools.com/jsref/prop_element_childelementcount.asp),((https://www.youtube.com/watch?v=ZGMJqxIkAb0))