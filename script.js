  // seletor do input
  const inputSEl = document.getElementById("texto-tarefa");
  // seletor do ol
  const olsel = document.getElementById("lista-tarefas");
  // seletor do btn adicionar
  const btnsel = document.getElementById("criar-tarefa");

  
  // escuta o evento adicionar
  btnsel.addEventListener("click", nvtarefa);

  function nvtarefa() {
    let objcria =document.createElement('li')
    let container = inputSEl.value;
    if (container =="") {
      alert('Insira um valor');
    }
      else {
    objcria.textContent =container;
    objcria.className ='file';
    objcria.addEventListener("click", bgli);
    olsel.appendChild(objcria);
    inputSEl.value = '';}
      };
    
  function bgli (event){
    let bgcor = '';
    if (event.target.style.backgroundColor === ""){
      bgcor = 'rgb(128, 128, 128)'
      
    }
    
    event.target.style.backgroundColor = bgcor;
    } 

    
    
   
   //.addEventListener('click',function(event){