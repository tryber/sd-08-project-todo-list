let botaoAdd = document.querySelector("#criar-tarefa");
let caixaTexto = document.querySelector("#texto-tarefa");
var tarefas = document.querySelector("#lista-tarefas");
botaoAdd.addEventListener('click', function () {
  let tarefa = document.createElement('li');
  tarefa.className = 'tarefasLi';
  tarefas.appendChild(tarefa);
  tarefa.innerHTML = caixaTexto.value;
  caixaTexto.value = "";
})

// Realizei esse requisito com a ajuda de:
// https://css-tricks.com/snippets/javascript/bind-different-events-to-click-and-double-click/
// https://www.w3schools.com/jsref/met_win_settimeout.asp
// Ainda não entendi o uso do booleano
// tô quase entendendo, o evento de 2 clicks irá limpar o timer, e tornar prevent verdadeiro...ainda tá complicado

var timer = 0;
var delay = 200;
var prevent = false;
tarefas.addEventListener('click', function (event) {
  // condição para um clique
  if (event.detail === 1) {
    // se o elemento não estiver selecionado...
    if (event.target.style.backgroundColor !== 'rgb(128 , 128 , 128)') {
      timer = setTimeout(function () {
        // Condição para gerar delay e o evento distinguir entre duplo clique e único clique
        if (!prevent) {
            // Aqui vou colocar um for para tirar o cinza dos outro cinzas, preciso e uma lista
            listaTarefas = document.querySelectorAll('.tarefasLi')
            console.log(listaTarefas)
            for (let i = 0; i < listaTarefas.length; i++ ) {
              let element = listaTarefas[i];
              if (element.style.backgroundColor === 'rgb(128, 128, 128)' ) {
                element.style.backgroundColor = 'white';
              }
            }
          event.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
        }
        prevent = false;
      }, delay);
    }
  } else if (event.detail === 2) {
    clearTimeout(timer);
    prevent = true;
    if (event.target.className !== 'tarefasLi completed') {
      event.target.className = 'tarefasLi completed';
    } else {
      event.target.className = 'tarefasLi';
    }
  }
});

var tarefas = document.querySelector('#lista-tarefas');
let botaoLimpa = document.querySelector('#apaga-tudo');
botaoLimpa.addEventListener('click', function() {
  classesPraApagar = document.querySelectorAll('.tarefasLi');
  for (i = 0; i< classesPraApagar.length; i++){
    element = classesPraApagar[i];
    tarefas.removeChild(element);
  }
})

let botaoCompletados = document.querySelector('#remover-finalizados');
botaoCompletados.addEventListener('click', function (){
  let completados = document.querySelectorAll('.completed');
  for (i = 0; i< completados.length; i++){
    element = completados[i];
    tarefas.removeChild(element);
  }
})
