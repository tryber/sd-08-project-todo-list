const listaTarefa = document.createElement('ol');

// criar li dinamicamente
window.onload = function () {
  document.body.appendChild(listaTarefa);
  listaTarefa.id = 'lista-tarefas';
};

function addTask() {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = document.getElementById('texto-tarefa').value;
  novaTarefa.id = 'tarefa';
  listaTarefa.appendChild(novaTarefa);
  document.getElementById('texto-tarefa').value = '';
}

addEventListener('click', function (event) {
  const y = event.target;
  if (y.id === 'tarefa') {
    y.style.backgroundColor = 'rgb(128,128,128)';
    y.classList.add('selected')
  }
});

addEventListener('click', function (event) {
  const y = event.target;
  let selecteds = document.querySelectorAll('.selected')
  for (let i = 0; i < selecteds.length; i++) {
    if (selecteds[i].style.backgroundColor = 'rgb(128,128,128)'){
      selecteds[i].style.backgroundColor = 'rgb(255,255,255)';
      y.style.backgroundColor = 'rgb(128,128,128)';  
    }
  }
});




addEventListener('click', function (event) {
  const y = event.target;
  if (y.id === 'apaga-tudo') {
    const li = document.getElementById('lista-tarefas');
    li.parentNode.removeChild(li);
  }
});

// dblclick no li faz text-decoration line-through solid rgb (0,0,0)
