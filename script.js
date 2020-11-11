const caixaTexto = document.querySelector('#texto-tarefa');
const botaoAdiciona = document.getElementById('criar-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');

// Refatorei com a ajuda de meu colega Paulo Simões
function adicionaTarefa(texto) {
  const itemLista = document.createElement('li');
  itemLista.className = 'tarefa';
  itemLista.innerText = texto;
  return itemLista;
}

botaoAdiciona.addEventListener('click', () => {
  const texto = caixaTexto.value;
  listaOrdenada.appendChild(adicionaTarefa(texto));
  caixaTexto.value = '';
});


function corFundoTarefa() {
  let ultimoSelecionado = null;
  listaOrdenada.addEventListener('click', (event) => {
    if (ultimoSelecionado === null) {
      ultimoSelecionado = event.target;
      event.target.style.backgroundColor = 'gray';
      event.target.classList.add('selecionada');
    } else {
      ultimoSelecionado.style.backgroundColor = 'initial';
      ultimoSelecionado.classList.remove('selecionada');
      ultimoSelecionado = event.target;
    }
    event.target.style.backgroundColor = 'gray';
    event.target.classList.add('selecionada');
  });
}

corFundoTarefa();

function riscarTarefa() {
  listaOrdenada.addEventListener('dblclick', (event) => {
    if (event.target.className === 'tarefa completed' || event.target.className === 'tarefa completed selecionada') {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

riscarTarefa();

function apagarLista() {
  const apagaLista = document.getElementById('apaga-tudo');

  apagaLista.addEventListener('click', () => {
    // a thread do slack, https://trybecourse.slack.com/archives/C01A9A2N93R/p1605039868012200, me ajudou a fazer este requisito
    listaOrdenada.innerHTML = '';
  });
}

apagarLista();


function apagarTarefasFinalizadas() {
  const removerTarefaFinalizada = document.getElementById('remover-finalizados');

  removerTarefaFinalizada.addEventListener('click', () => {
    const tarefasFinalizadas = document.querySelectorAll('.completed');
    for (let i = 0; i < tarefasFinalizadas.length; i += 1) {
      const tarefaFinalizada = tarefasFinalizadas[i];
      listaOrdenada.removeChild(tarefaFinalizada);
    }
  });
}

apagarTarefasFinalizadas();

// Fiz com a ajuda do meu colega Paulo Simões
function salvarTarefas() {
  const array = [];
  const tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    const tarefa = tarefas[i];
    array.push({ atividade: tarefa.innerText, selecionada: tarefa.classList.contains('selecionada'), completada: tarefa.classList.contains('completed') });
  }
  localStorage.setItem('tarefas', JSON.stringify(array));
}

const salvarLista = document.querySelector('#salvar-tarefas');
salvarLista.addEventListener('click', salvarTarefas);

const salvo = JSON.parse(localStorage.getItem('tarefas')) || null;

if (salvo !== null) {
  for (let i = 0; i < salvo.length; i += 1) {
    const tarefa = salvo[i];
    const itemLista = adicionaTarefa(tarefa.atividade);

    if (tarefa.selecionada) {
      itemLista.classList.add('selecionada');
    }

    if (tarefa.completada) {
      itemLista.classList.add('completed');
    }

    listaOrdenada.appendChild(itemLista);
  }
}
