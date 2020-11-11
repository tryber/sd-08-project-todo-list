const listaPai = document.querySelectorAll('#lista-tarefas');
const botaoAdd = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const botaoRem = document.querySelector('#apaga-tudo')



botaoAdd.addEventListener('click',function adicionarTarefas(){
    let tasks = document.createElement('li');
    tasks.innerText = input.value;
    listaPai[0].appendChild(tasks);
    input.value = '';
    tasks.className="lis"
});

const lista = document.getElementsByClassName('lis');

function selected(event) {
    for (let i = 0; i < lista.length; i += 1) {
      lista[i].classList.remove('selected');
      event.target.classList.add('selected');
      lista[i] = event.target;
    }
  }
  
  function completed(event) {
    event.target.classList.toggle('completed');
  }

  listaPai[0].addEventListener('click', selected);
  listaPai[0].addEventListener('dblclick', completed);


botaoRem.addEventListener('click', function(){
    listaPai[0].innerHTML = '';
})

