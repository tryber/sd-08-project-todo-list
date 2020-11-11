
  let inputSEl = document.getElementById("texto-tarefa");
  let olsel = document.getElementById("lista-tarefas");
  let btnsel = document.getElementById("criar-tarefa");

  
  
  btnsel.addEventListener("click", nvtarefa);

  function nvtarefa() {
    let objcria =document.createElement('li')
    let container = inputSEl.value;
    if (container =="") {
      alert('Insira um valor');
    }
      else {
    objcria.textContent =container;
    olsel.appendChild(objcria);
    inputSEl.value = '';}
    }
    
  
  


 