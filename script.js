function addTask() {
    const input = document.querySelector('#texto-tarefa');
    const botao = document.querySelector('#criar-tarefa');

    botao.addEventListener('click', function() {
      let textoDigitado = input.value;
      const ol = document.querySelector('#lista-tarefas');
      const li = document.createElement('li');

      li.innerHTML = textoDigitado;
      li.className = 'task';

      ol.appendChild(li);

      input.value = '';
    });
}

addTask();

function colorTask() {
    const ol = document.querySelector('#lista-tarefas');

    ol.addEventListener('click', function(event) {
    const li = document.querySelectorAll('.task');
      if (event.target.className === 'task') {
        for (let index = 0; index < li.length; index += 1){
            li[index].style.backgroundColor = 'white';
        }
        event.target.style.backgroundColor = 'grey';
      }
    });
}

colorTask();

function completedTask() {
    const ol = document.querySelector('#lista-tarefas');

    ol.addEventListener('dblclick', function(event) {
      if (event.target.className === 'task') {
        event.target.className = event.target.className + ' ' + 'completed';
      } else {
        event.target.className = 'task';
      }
    });
}

completedTask();

function removeTask() {
    const ol = document.querySelector('#lista-tarefas');
    const button = document.querySelector('#apaga-tudo');

    button.addEventListener('click', function() {
        const li = document.querySelectorAll('.task');
        for (let index = 0; index < li.length; index += 1) {
            ol.removeChild(li[index]);
        }
    });
}

removeTask();

function removeCompletedTask() {
    const ol = document.querySelector('#lista-tarefas');
    const button = document.querySelector('#remover-finalizados');

    button.addEventListener('click', function() {
        const li = document.querySelectorAll('.completed');
        for (let index = 0; index < li.length; index += 1) {
            ol.removeChild(li[index]);
        }
    });
}

removeCompletedTask();