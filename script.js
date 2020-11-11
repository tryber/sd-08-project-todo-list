const lista = document.getElementById('lista-tarefas');
const itemInput = document.getElementById('texto-tarefa');
const buttonAddItem = document.getElementById('criar-tarefa');

buttonAddItem.addEventListener('click', function() {
  const item = document.createElement('li');
  item.innerText = itemInput.value;
  itemInput.value = '';
  lista.appendChild(item);
  console.log(item);
});
