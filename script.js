  
 

  
    // seletor do input
  const inputSEl = document.getElementById("texto-tarefa");
  // seletor do ol
  const olsel = document.getElementById("lista-tarefas");
  // seletor do btn adicionar
  const btnsel = document.getElementById("criar-tarefa");
  //deve receber o liquando for celecionado
  let liselecionada; 

  

  
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
      liselecionada =event.target;
      }
      for (i=0; i<todoli.length;i+=1){
        todoli[i].style.backgroundColor ="";
      };
      event.target.style.backgroundColor = bgcor;

      };
    
      // põe listra na li
   function sobrelist(event){
    let todolis =document.getElementsByName('li');
    for (i=0; i<todolis.length;i+=1){
      event.target[i].className ="Completed";
    };
   }

    //botão apagatudo
   document.getElementById('apaga-tudo').addEventListener('click',funcApagao);
  
  function funcApagao (){
     let olconteiner = document.querySelector('#lista-tarefas');
     olconteiner.innerHTML = '';
     
  };
   
    //botão apaga selecionado
  /*   document.getElementById('remover-selecionado').addEventListener('click',funcApacel);
  
  function funcApacel (){
            let olconteiner = document.querySelector('#lista-tarefas');
           }
    
     olconteiner.innerHTML.liselecionada = ''; */


     //botão salva Tudo
let btnsalva = document.getElementById("salvar-tarefas");
    
    // escuta o evento salvar lista
btnsalva.addEventListener("click", salvatd);
    
function salvatd () {
  let selectedlis = document.querySelectorAll('li');
  for (let i =0; i < selectedlis.length; i+=1){
   let a = String("li"+i);
   let b = selectedlis[i].innerText;
   localStorage.setItem(a,b);      
  }
};

/* //    btnsel.addEventListener("click", nvtarefa);

  // function nvtarefa() {
  //   let objcria =document.createElement('li')
  //   let container = inputSEl.value;
  //   if (container ===""|| container ===null) {
  //     alert('Insira um valor');
  //   }
  //     else {
  //   objcria.textContent =container;
  //   objcria.className ='file';
  //   objcria.addEventListener("click", bgli);
  //   objcria.addEventListener("dbleclick", sobrelist);
  //   olsel.appendChild(objcria);
  //   inputSEl.value = '';}
  //     } */