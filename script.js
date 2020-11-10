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
