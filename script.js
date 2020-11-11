function adicionaTarefa() {
  const caixaTexto = document.querySelector('#texto-tarefa');
  const botaoAdiciona = document.getElementById('criar-tarefa');
  const listaOrdenada = document.getElementById('lista-tarefas');

  botaoAdiciona.addEventListener('click', () => {
    const itemLista = document.createElement('li');
    itemLista.className = 'tarefa';
    itemLista.innerText = caixaTexto.value;
    listaOrdenada.appendChild(itemLista);
    caixaTexto.value = '';
  });
}

adicionaTarefa();

function corFundoTarefa() {
  const listaOrdenada = document.getElementById('lista-tarefas');
  let ultimoSelecionado = null;
  listaOrdenada.addEventListener('click', (event) => {
    if (ultimoSelecionado === null) {
      ultimoSelecionado = event.target;
      event.target.style.backgroundColor = 'gray';
    } else {
      ultimoSelecionado.style.backgroundColor = 'initial';
      ultimoSelecionado = event.target;
    }
    event.target.style.backgroundColor = 'gray';
  });
}

corFundoTarefa();

function riscarTarefa() {
  const listaOrdenada = document.getElementById('lista-tarefas');

  listaOrdenada.addEventListener('dblclick', (event) => {
    if (event.target.className === 'tarefa completed') {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

riscarTarefa();

function apagarLista() {
  const apagaLista = document.getElementById('apaga-tudo');
  const listaOrdenada = document.getElementById('lista-tarefas');

  apagaLista.addEventListener('click', () => {
    // a thread do slack, https://trybecourse.slack.com/archives/C01A9A2N93R/p1605039868012200, me ajudou a fazer este requisito
    listaOrdenada.innerHTML = '';
  });
}

apagarLista();


function apagarTarefasFinalizadas() {
  const removerTarefaFinalizada = document.getElementById('remover-finalizados');
  const listaOrdenada = document.getElementById('lista-tarefas');

  removerTarefaFinalizada.addEventListener('click', () => {
    const tarefasFinalizadas = document.querySelectorAll('.completed');
    for (let i = 0; i < tarefasFinalizadas.length; i += 1) {
      const tarefaFinalizada = tarefasFinalizadas[i];
      listaOrdenada.removeChild(tarefaFinalizada);
    }
  });
}

apagarTarefasFinalizadas();

function salvarTarefas() {
  const salvarTarefas = document.querySelector('#salvar-tarefas');

  salvarTarefas.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('.tarefa');

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    localStorage.getItem('tarefas');
  })
}

salvarTarefas();
