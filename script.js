
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
tarefas.addEventListener('click', function (event) {
  // condição para um clique
  if (event.detail === 1) {
    // se o elemento não estiver selecionado...
    if (event.target.style.backgroundColor !== 'rgb(128 , 128 , 128)') {
      let listaTarefas = document.querySelectorAll('.tarefasLi')
      console.log(listaTarefas)
      for (let i = 0; i < listaTarefas.length; i++ ) {
        let element = listaTarefas[i];
        if (element.style.backgroundColor === 'rgb(128, 128, 128)' ) {
          element.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
      }
      event.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
    }
  } else if (event.detail === 2) {
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

let botaoUp = document.querySelector("#mover-cima");
botaoUp.addEventListener('click', function () {
let listaTarefas = document.querySelectorAll('.tarefasLi');
let paiTarefas = document.querySelector("#lista-tarefas");
  for (let i = 0; i < listaTarefas.length; i++ ) {
    let element = listaTarefas[i];
    if (element.style.backgroundColor === 'rgb(128, 128, 128)' ) {
      if (element.previousElementSibling !== null){
        paiTarefas.insertBefore(element, element.previousElementSibling)
      }
    }
  }
})

let botaoDown = document.querySelector("#mover-baixo");
botaoDown.addEventListener('click', function () {
let listaTarefas = document.querySelectorAll('.tarefasLi');
let paiTarefas = document.querySelector("#lista-tarefas");
  for (let i = 0; i < listaTarefas.length; i++ ) {
    let element = listaTarefas[i];
    if (element.style.backgroundColor === 'rgb(128, 128, 128)' ) {
      if (element.nextElementSibling !== null){
        paiTarefas.insertBefore(element.nextElementSibling, element)
      }
    }
  }
})

let botaoRemoveSelecionado = document.querySelector("#remover-selecionado");
botaoRemoveSelecionado.addEventListener('click', function () {
let listaTarefas = document.querySelectorAll('.tarefasLi');
let paiTarefas = document.querySelector("#lista-tarefas");
  for (let i = 0; i < listaTarefas.length; i++ ) {
    let element = listaTarefas[i];
    if (element.style.backgroundColor === 'rgb(128, 128, 128)' ) {
        paiTarefas.removeChild(element)
    }
  }
})

let salvar = document.querySelector("#salvar-tarefas");
 salvar.addEventListener('click', function () {
  let listaTarefas = document.querySelectorAll('.tarefasLi');
  let tarefaSalva = []
  let classe =[]
    for (let i = 0; i < listaTarefas.length; i++ ) {
      let element = listaTarefas[i];
      tarefaSalva.push(element.innerHTML);
      classe.push(element.className)
      }
      localStorage.setItem("tarefaSalva", JSON.stringify(tarefaSalva))
      localStorage.setItem("classe", JSON.stringify(classe))
 })
if (localStorage.length !== 0){
  var tarefas = document.querySelector("#lista-tarefas");
  let classeUsavel = JSON.parse(localStorage.getItem("classe"))
  let tarefaSalvaUsavel = JSON.parse(localStorage.getItem("tarefaSalva"))
  for (let i = 0; i < tarefaSalvaUsavel.length; i++ ) {
      let tarefa = document.createElement('li');
      tarefas.appendChild(tarefa);
      tarefa.innerHTML = tarefaSalvaUsavel[i];
      tarefa.className = classeUsavel[i]
  }
}