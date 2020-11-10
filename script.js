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
    item.addEventListener('click', function(event){
      if(lastSelect === null){
        lastSelect = event.target;
      }else{
        lastSelect.style.backgroundColor = 'white';
        lastSelect = event.target;
      }
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    });
  });
}
createList();

// function colocarFundo(event) {
//   event.style.backgroundColor = 'rgb(128,128,128)';
// }

// function selectList() {
//   const orderedList = document.getElementById('lista-tarefas');

//   orderedList.addEventListener('click', function (event) {
//     const oList = document.getElementsByClassName('select');
//     console.log(oList);
//     // if (event.target.className === 'select') {
//     //   if(oList != null){
//     //     oList.classList.remove('select')
//     //   }
//     //   event.target.classList.add('select');
//     // }
//   });
// }

// selectList();