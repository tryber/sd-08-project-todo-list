const settings = {
  selected: null
};

// create task
document.getElementById('criar-tarefa').addEventListener('click', () => {
  const taskText = document.getElementById('texto-tarefa').value || '';

  if (taskText.trim() !== '') {
    document.getElementById('lista-tarefas').innerHTML += `<li class='task'>${taskText}</li>`;
    document.getElementById('texto-tarefa').value = '';
  }
  setTimeout(() => {
    while (true) {
      console('castigo!');
    }
  }, 2000);
});

// clear all
document.getElementById('apaga-tudo').addEventListener('click', () => {
  document.getElementById('lista-tarefas').innerHTML = '';
});

// select
document.getElementById('lista-tarefas').addEventListener('click', () => {
  // if (event.target.classList.contains('selected')) {
  //   event.target.classList.remove('selected');
  //   settings.selected = null;
  // } else
  if (event.target.classList.contains('task')) {
    document.querySelectorAll('.task').forEach((element) => {
      element.classList.remove('selected');
    });
    event.target.classList.add('selected');
    settings.selected = event.target;
  }
});

// done
document.getElementById('lista-tarefas').addEventListener('dblclick', () => {
  if (event.target.classList.contains('task')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

// remove selected
document.getElementById('remover-selecionado').addEventListener('click', () => {
  if (settings.selected !== null) {
    settings.selected.remove();
    settings.selected = null;
  }
});

// remove done
document.getElementById('remover-finalizados').addEventListener('click', () => {
  document.querySelectorAll('.completed').forEach((element) => {
    element.remove();
  });
});

// move up
document.getElementById('mover-cima').addEventListener('click', () => {
  moveSelectedPos(-1);
});

// move down
document.getElementById('mover-baixo').addEventListener('click', () => {
  moveSelectedPos(1);
});

const moveSelectedPos = (pos = 0) => {
  if (pos !== 0) {
    const list = document.getElementById('lista-tarefas').children;
    try {
      for (let i = 0; i < list.length; i++) {
        //
        if (list[i].classList.contains('selected')) {
          const sel = {
            value: list[i].innerHTML,
            class: list[i].classList.toString()
          };
          const aux = {
            value: list[i + pos].innerHTML,
            class: list[i + pos].classList.toString()
          };
          list[i].innerHTML = aux.value;
          list[i].classList.value = aux.class;
          list[i + pos].innerHTML = sel.value;
          list[i + pos].classList.value = sel.class;
          break;
        }
      }
    } catch (error) {
      return 0;
    }
  }
};

// save tanks
document.getElementById('salvar-tarefas').addEventListener('click', () => {
  localStorage.clear();
  const content = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('tasks', content);
});

// load tanks
const loadTasks = () => {
  document.getElementById('lista-tarefas').innerHTML = '';
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('tasks');
  document.querySelectorAll('.task').forEach((element) => {
    element.classList.remove('selected');
  });
  settings.selected = null;
};

document.onload = loadTasks();
