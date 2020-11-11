const text = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
let lastSelect = undefined;


function selectHandler(event) {
  if (lastSelect === null) {
    lastSelect = event.target;
  } else {
    lastSelect.style.backgroundColor = 'white';
    lastSelect = event.target;
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function createItem(texto) {
  const item = document.createElement('li');
  item.classList.add('list');
  item.innerHTML = texto;
  item.addEventListener('click', selectHandler);
}

function addItem() {
  const list = document.getElementById('lista-tarefas');
  const item = createItem(text.value);
  list.appendChild(item);
  text.value = '';
}

button.addEventListener('click', addItem);


// function createList() {
//   button.addEventListener('click', function () {
//     const list = document.getElementById('lista-tarefas');
//     const item = document.createElement('li');
//     list.appendChild(item);
//     item.innerHTML = text.value;
//     text.value = '';
//     item.classList.add('list');

//     item.addEventListener('click', function (event) {
//       if (lastSelect === undefined) {
//         lastSelect = event.target;
//       } else {
//         lastSelect.style.backgroundColor = 'white';
//         lastSelect = event.target;
//       }
//       event.target.style.backgroundColor = 'rgb(128,128,128)';
//     });

//     item.addEventListener('dblclick', function (event) {
//       if (lastSelect === undefined) {
//         lastSelect = event.target;
//         console.log('entrou 1')
//       } else if (lastSelect !== contains('completed')) {
//         lastSelect.classList.add('completed');
//         lastSelect = event.target;
//         console.log('entrou 2')
//       }
//       event.target.classList.remover('completed');
//       console.log('entrou 3')
//     });
//   });
// }
// createList();


