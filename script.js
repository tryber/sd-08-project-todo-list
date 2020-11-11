const text = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
let lastSelect = null;

// Req 5 e 6
function createList() {
  button.addEventListener('click', function () {
    const list = document.getElementById('lista-tarefas');
    const item = document.createElement('li');
    list.appendChild(item);
    item.innerHTML = text.value;
    text.value = '';
    item.classList.add('list');
    item.addEventListener('click', function (event) {
      if (lastSelect === null) {
        lastSelect = event.target;
      } else {
        lastSelect.style.backgroundColor = 'white';
        lastSelect = event.target;
      }
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    });
  });
}
createList();
