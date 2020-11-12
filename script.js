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
