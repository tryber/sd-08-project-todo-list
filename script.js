  // seletor do input
  let inputSEl = document.getElementById("texto-tarefa");
  // seletor do ol
  let olsel = document.getElementById("lista-tarefas");
  // seletor do btn adicionar
  let btnsel = document.getElementById("criar-tarefa");

  
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
    olsel.appendChild(objcria);
    inputSEl.value = '';}
      };
    
   //Aqui pegamos todos os li
   let items = document.getElementsByClassName('.file');
   for(let i = 0; i < items.length; i++){
    items[i].addEventListener('click',function(){
      items[i].style.background = rgb(128, 128, 128);
    } ); 

   };

   

    
    

  
  
      

    


 