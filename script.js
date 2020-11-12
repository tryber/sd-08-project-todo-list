const caixaTexto = document.querySelector('#texto-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');

function adicionaTarefa(texto) {
  // Refatorei com a ajuda de meu colega Paulo Simões
  const itemLista = document.createElement('li');
  itemLista.className = 'tarefa';
  itemLista.innerText = texto;
  return itemLista;
}

const botaoAdiciona = document.getElementById('criar-tarefa');

botaoAdiciona.addEventListener('click', () => {
  const texto = caixaTexto.value;
  listaOrdenada.appendChild(adicionaTarefa(texto));
  caixaTexto.value = '';
});


function corFundoTarefa(event) {
  const tarefaSelecionada = listaOrdenada.querySelector('.selecionada');

  if (tarefaSelecionada !== null) {
    if (tarefaSelecionada !== event.target) {
      tarefaSelecionada.classList.remove('selecionada');
    }
  }
  event.target.classList.add('selecionada');
}

listaOrdenada.addEventListener('click', corFundoTarefa);

function riscarTarefa(event) {
  if (event.target.className === 'tarefa completed' || event.target.className === 'tarefa completed selecionada') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

listaOrdenada.addEventListener('dblclick', riscarTarefa);

function apagarLista() {
  // a thread do slack, https://trybecourse.slack.com/archives/C01A9A2N93R/p1605039868012200, me ajudou a fazer este requisito
  listaOrdenada.innerHTML = '';
}

const apagaLista = document.getElementById('apaga-tudo');

apagaLista.addEventListener('click', apagarLista);

function apagarTarefasFinalizadas() {
  const tarefasFinalizadas = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefasFinalizadas.length; index += 1) {
    const tarefaFinalizada = tarefasFinalizadas[index];
    tarefaFinalizada.remove();
  }
}

const removerTarefaFinalizada = document.getElementById('remover-finalizados');

removerTarefaFinalizada.addEventListener('click', apagarTarefasFinalizadas);

// analisando o código do meu colega Paulo Simões, tive um insight de como poderia ser feito, https://github.com/tryber/sd-08-project-todo-list/pull/36/files
function salvarTarefas() {
  const array = [];
  const tarefas = document.querySelectorAll('.tarefa');

  for (let index = 0; index < tarefas.length; index += 1) {
    const tarefa = tarefas[index];
    array.push({ atividade: tarefa.innerText, selecionada: tarefa.classList.contains('selecionada'), completada: tarefa.classList.contains('completed') });
  }

  localStorage.setItem('tarefas', JSON.stringify(array));
}

const salvarLista = document.querySelector('#salvar-tarefas');

salvarLista.addEventListener('click', salvarTarefas);

// Fiz com a ajuda do meu colega Paulo Simões
const listaSalva = JSON.parse(localStorage.getItem('tarefas')) || null;

for (let index = 0; index < listaSalva.length; index += 1) {
  const tarefa = listaSalva[index];
  const itemLista = adicionaTarefa(tarefa.atividade);

  if (tarefa.selecionada) {
    itemLista.classList.add('selecionada');
  }

  if (tarefa.completada) {
    itemLista.classList.add('completed');
  }

  listaOrdenada.appendChild(itemLista);
}

function apagarTarefaSelecionada() {
  const tarefaSelecionada = document.querySelector('.selecionada');

  tarefaSelecionada.remove();
}

const removerTarefaSelecionada = document.getElementById('remover-selecionado');

removerTarefaSelecionada.addEventListener('click', apagarTarefaSelecionada);
