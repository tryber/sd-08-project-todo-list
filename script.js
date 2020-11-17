function adicionarTarefa() {
    let tarefa = document.querySelector('#texto-tarefa').value;
    let lista = document.querySelector('#lista-tarefas');
    let elemento = document.createElement('li');
    elemento.innerText = tarefa;
    lista.appendChild(elemento);
  }
  function mudarCor(){
    let lista = document.getElementById('lista-tarefas');
    lista.addEventListener('click', (event) =>{
        let elemento = document.querySelectorAll('li');
        for ( let contador = 0; contador < elemento.length; contador+=1){
            elemento[contador].style.backgroundColor = "white";
        }
        event.target.style.backgroundColor = "rgb(128,128,128)";
    })
}
mudarCor()


  window.onload = function () {
  let botaoAdicionar = document.querySelector('#criar-tarefa');
  botaoAdicionar.addEventListener('click', adicionarTarefa);
  }