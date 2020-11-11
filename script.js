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

function selectedTask() {

}