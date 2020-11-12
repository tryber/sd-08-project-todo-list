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
    if (container ===""|| container ===null) {
      alert('Insira um valor');
    }
      else {
    objcria.textContent =container;
    objcria.className ='file';
    objcria.addEventListener("click", bgli);
    objcria.addEventListener("dbleclick", sobrelist);
    olsel.appendChild(objcria);
    inputSEl.value = '';}
      };
    
  function bgli (event){
    let todoli =document.querySelectorAll('li');
    let bgcor = '';
    if (event.target.style.backgroundColor === ""){
      bgcor = 'rgb(128, 128, 128)'
      }
      for (i=0; i<todoli.length;i+=1){
        todoli[i].style.backgroundColor ="";
      };
      event.target.style.backgroundColor = bgcor;

      };
    
      // põe listra na li
   function sobrelist(){
    let todolis =document.querySelectorAll('li');
    for (i=0; i<todolis.length;i+=1){
      todolis[i].className ="Completed";
    };
   }

   


   let listapagli = document.getElementById('apaga-tudo').addEventListener('click',funcApagao);
  function funcApagao (){
    for(let index of listapagli)
   
   
  };

    
  
     
 