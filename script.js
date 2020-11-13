function addButton () {

    let listaOrdenada = document.getElementById("lista-tarefas");

    let textInput = document.querySelector("#texto-tarefa");

    let novoItem = document.createElement("li");

    listaOrdenada.appendChild(novoItem);

    novoItem.innerText = textInput.value;

    novoItem.className="tarefa";

    textInput.value = "";
}


let addButtonClick = document.querySelector("#criar-tarefa");

addButtonClick.addEventListener("click", function(){
    addButton ();
});

let list = document.getElementById("lista-tarefas");

list.addEventListener('click', function (event) {
    let li = event.target;
    for (let i = 0; i < list.childNodes.length; i += 1) {
      if (list.childNodes[i] !== li) {
        list.childNodes[i].style.backgroundColor = 'transparent';
      }
    }

    li.style.backgroundColor = 'rgb(128, 128, 128)';

});

// list.addEventListener("dblclick" , function(event){

//     if (event.target.classList.contains("completed")){
//         event.target.classList.remove("completed");
//     }
//     else{
//         event.target.className="completed";
//     }

// })




// let apagaTudo = document.getElementById("apaga-tudo");

// apagaTudo.addEventListener('click', function () {
//     while (list.firstChild) {
//       list.removeChild(list.firstChild);
//     }
// });




// let apagaFinalizados = document.getElementById("remover-finalizados");

// apagaFinalizados.addEventListener('click', function () {
//     for (let i = (list.childNodes.length - 1); i >= 0; i -= 1) {
//       if (list.childNodes[i].classList.contains('completed')) {
//         list.removeChild(list.childNodes[i]);
//       }
//     }
//   });



//   function saveTasks(listaDeTarefas){
//     localStorage.setItem("tarefas-salvas", listaDeTarefas);
//   }
  
//   let listaDeTarefas = document.getElementById("lista-tarefas");
//   let buttonSaveTasks = document.getElementById("salvar-tarefas");
  
//   buttonSaveTasks.addEventListener('click', function () {
//     localStorage.clear();
//     let listaDeTarefas = document.getElementsByTagName('li');
//     for (let item = 0; item < listaDeTarefas.length; item += 1) {
//       localStorage.setItem(item, listaDeTarefas[item].innerHTML);
//       localStorage.setItem(listaDeTarefas[item].innerText, listaDeTarefas[item].className);
//     }
//   });
list.addEventListener ('dblclick', function(event){
    const completed = event.target;
    if (completed.classList.contains('completed')) {
      completed.classList.remove('completed');
    } else {
      completed.classList.add('completed');
    }
  })
  
  let cleanUp = document.querySelector('#apaga-tudo');
  cleanUp.addEventListener ('click', function(){
    let items = document.querySelectorAll('.item');
    for (let i = 0; i < items.length; i += 1) {
      list.lastChild.remove();
    }
  })
  
  let clean = document.querySelector('#remover-finalizados');
  clean.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    for (let i = 0; i < items.length; i += 1){
      if (items[i].classList.contains('completed')){
        list.removeChild(items[i]);
      }
    }
  })


  window.onload=function(){
    for (let i = 0; i < (localStorage.length / 2); i += 1) {
      let localStorageList = document.createElement('li');
      localStorageList.innerText = localStorage.getItem(i);
      localStorageList.className = localStorage.getItem(localStorageList.innerText);
      list.appendChild(localStorageList);
    }
  }



  let upButton = document.getElementById("mover-cima");

  upButton.addEventListener('click', function () {   
    let tasks = listaDeTarefas.childNodes;
      for (let i = 1; i < tasks.length; i += 1) {
        if (tasks[i].style.backgroundColor === 'rgb(128, 128, 128)') {
          listaDeTarefas.insertBefore(tasks[i], tasks[i - 1]);
        }
      }
  });
  
  


  let downButton = document.getElementById("mover-baixo");
  downButton.addEventListener('click', function () { 
    let tasks = listaDeTarefas.childNodes;
      for (let i = tasks.length - 2; i >= 0; i -= 1) {
        if (tasks[i].style.backgroundColor === 'rgb(128, 128, 128)') {
          listaDeTarefas.insertBefore(tasks[i + 1], tasks[i]);
        }
      }
  });
  
  
  let removeSelecionado = document.getElementById("remover-selecionado"); 
  removeSelecionado.addEventListener('click', function () {
    let tasks = listaDeTarefas.childNodes;
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        list.removeChild(tasks[i]);
      }
    }
  });
