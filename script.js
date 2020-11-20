const listaOrdenadaTarefas = document.getElementById('lista-tarefas');
const botao = document.getElementById('criar-tarefa');
const localTexto = document.getElementById('texto-tarefa');

botao.addEventListener('click', function () {
  const tarefaInserida = document.createElement('li');
  tarefaInserida.className = 'tarefa';
  tarefaInserida.innerHTML = localTexto.value;
  localTexto.value = '';
  listaOrdenadaTarefas.appendChild(tarefaInserida);
  tarefaInserida.addEventListener('click', corFundoLista);
  tarefaInserida.addEventListener('dblclick', tarefaConcluida);
});

let tarefaSelecionada = '';
function corFundoLista(Event) {
  if (tarefaSelecionada === '') {
    tarefaSelecionada = Event.target; // event é o click. target é o elemento html que aconteceu o evento.
  } else {
    tarefaSelecionada.style.backgroundColor = 'white';
    tarefaSelecionada = Event.target;
  }
  tarefaSelecionada.style.backgroundColor = 'rgb(128,128,128)';
  tarefaSelecionada.className = 'selected';
}
// console.log(Event.target);
const botaoApaga = document.getElementById('apaga-tudo');
botaoApaga.addEventListener('click', function () {
  listaOrdenadaTarefas.innerHTML = '';
});

function tarefaConcluida(Event) {
  Event.target.className = 'completed';
  const retiraTarefaConcluida = Event.target;
  retiraTarefaConcluida.addEventListener('dblclick', function () {
    Event.target.className = 'tarefa';
  });
}

const botaoRemoveFinalizados = document.getElementById('remover-finalizados');
botaoRemoveFinalizados.addEventListener('click', function () {
  const tarefaFinalizada = document.getElementsByClassName('completed');
  const tarefaFinalizadaArray = tarefaFinalizada.length;
  for (let index = 0; index < tarefaFinalizadaArray; index += 1) {
    if (tarefaFinalizada[0].classList.contains('completed')) {
      tarefaFinalizada[0].remove();
    }
  }
});

listaOrdenadaTarefas.innerHTML = localStorage.getItem('listaSalva');
const salvaListaGeral = document.getElementById('salvar-tarefas');
salvaListaGeral.addEventListener('click', function () {
  localStorage.setItem('listaSalva', listaOrdenadaTarefas.innerHTML);
});

const botaoRemoveSelecionado = document.getElementById('remover-selecionado');
botaoRemoveSelecionado.addEventListener('click', function () {
  const tarefaSelected = document.getElementsByClassName('selected');
  const tarefaSelectedArray = tarefaSelected.length;
  for (let index = 0; index < tarefaSelectedArray; index += 1) {
    if (tarefaSelected[0].classList.contains('selected')) {
      tarefaSelected[0].remove();
    }
  }
});
