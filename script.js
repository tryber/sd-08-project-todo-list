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
