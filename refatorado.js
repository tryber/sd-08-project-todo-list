// códigos utilizado antes da refatoração

// 1 refatoração
function corFundoTarefa() {
  const listaOrdenada = document.getElementById('lista-tarefas');

  listaOrdenada.addEventListener('click', (event) => {
    const tarefaSelecionada = document.querySelector('.selecionada');
    if (event.target.className === 'tarefa') {
      if (tarefaSelecionada !== null) {
        tarefaSelecionada.classList.remove('selecionada');
        event.target.classList.add('selecionada');
      }
      event.target.classList.add('selecionada');
    }
  });
}

corFundoTarefa();

function riscarTarefa() {
  const listaOrdenada = document.getElementById('lista-tarefas');

  listaOrdenada.addEventListener('dblclick', (event) => {
    if (event.target.className === 'tarefa completed' || event.target.className === 'tarefa selecionada completed') {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

riscarTarefa();

// 2 refatoração
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

function corFundoTarefa2() {
  const listaOrdenada = document.getElementById('lista-tarefas');
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

corFundoTarefa2();

function riscarTarefa2() {
  const listaOrdenada = document.getElementById('lista-tarefas');

  listaOrdenada.addEventListener('dblclick', (event) => {
    if (event.target.className === 'tarefa completed' || event.target.className === 'tarefa completed selecionada') {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

riscarTarefa2();

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
  const salvarLista = document.querySelector('#salvar-tarefas');

  salvarLista.addEventListener('click', () => {
    // analisando o código do meu colega Paulo Simões, me deu uma ideia de como poderia fazer
    // https://github.com/tryber/sd-08-project-todo-list/pull/36/files
    const array = [];

    const tarefas = document.querySelectorAll('.tarefa');
    for (let i = 0; i < tarefas.length; i += 1) {
      const tarefa = tarefas[i];
      array.push({ tarefa: tarefa.innerText, selecionada: tarefa.classList.contains('selecionada'), completada: tarefa.classList.contains('completed') });
    }
    localStorage.setItem('tarefas', JSON.stringify(array));
  });
}

salvarTarefas();
