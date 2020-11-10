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
  const color = 'rgb(128, 128, 128)';

  listaOrdenada.addEventListener('click', (event) => {
    event.target.style.backgroundColor = color;
  });
}

corFundoTarefa();
