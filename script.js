function criaHeader() {
  let header = document.createElement('header');
  document.body.appendChild(header);
  header.innerHTML = 'Minha Lista de Tarefas';
}
criaHeader();

function criaParagrafoFuncionamento() {
  let paragrafo = document.createElement('p');
  document.body.appendChild(paragrafo);
  paragrafo.id = 'funcionamento';
  paragrafo.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
}
criaParagrafoFuncionamento();

function criaInput() {
  let input = document.createElement('input');
  document.body.appendChild(input);
  input.type = 'text';
  input.id = 'texto-tarefa';
  input.placeholder = 'item que deseja adicionar';
}
criaInput();

function criaListaTarefas() {
  let lista = document.createElement('ol');
  document.body.appendChild(lista);
  lista.id = 'lista-tarefas';
  let item = document.createElement('li');
  lista.appendChild(item);
  item.innerHTML = 'teste';
}
criaListaTarefas()

function criaBotao() {
  // let input = document.getElementById('texto-tarefa');
  // let lista = document.getElementById('lista-tarefas');
  let botao = document.createElement('button');
  document.body.appendChild(botao);
  botao.id = 'criar-tarefa';
  botao.innerText = 'Adicionar';
  // botao.addEventListener('click', function() {
  //   if (input.valeu.lenght > 0) {
  //     let novoItem = document.createElement('li');
  //     novoItem.innerText = input.value;
  //     lista.appendChild(novoItem);
  //     input.value = '';
  //   }
  // });
}
criaBotao();
