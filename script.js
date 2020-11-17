const inputTxt = document.querySelector('#texto-tarefa');
const tarefaList = document.querySelector('#lista-tarefas');
tarefaList.innerHTML = localStorage.getItem("tarefaList");
addEventListener('click', (event) => {
    if(event.target.id == 'criar-tarefa'){
        if(inputTxt.value == ''){
            alert('insira uma tarefa por favor');
        }else{
        let li = document.createElement('li');
        li.className = 'item';
        li.innerText = inputTxt.value;
        tarefaList.appendChild(li);
        inputTxt.value = '';
        };
    }else if(event.target.className == 'item'){
        for(key = 0; key < tarefaList.children.length; key++){
            if(tarefaList.children[key].classList.contains('itemSelected')){
                tarefaList.children[key].classList.remove('itemSelected');
            };
        };
        event.target.classList.add('itemSelected');
    };
    if(event.target.id == 'apaga-tudo'){ 
        tarefaList.innerHTML = '';
    };
    if(event.target.id == 'remover-finalizados'){
        let completed = document.querySelectorAll('.completed');
        for(key = 0; key < completed.length; key++){
            tarefaList.removeChild(completed[key]);
        };
    };
    if(event.target.id == 'remover-selecionado'){
      for(key = 0; key < tarefaList.children.length; key++){
        if(tarefaList.children[key].classList.contains('itemSelected')){
        tarefaList.removeChild(tarefaList.children[key]);
        };
      };
    };
    if(event.target.id == 'salvar-tarefas'){
        localStorage.setItem('tarefaList', tarefaList.innerHTML);
    };
    if(event.target.id == 'mover-cima'){
        const list = document.querySelectorAll('.item');
        let selected;
        for(key = 0; key < list.length; key++){
          if(list[key].classList.contains('itemSelected')){
            selected = key;
          };
        };
        if(selected > 0){
          list[selected].parentElement.insertBefore( list[selected], list[selected - 1]);
        };
      }
      if(event.target.id == 'mover-baixo') {
        const list = document.querySelectorAll('.item');
        let selected;
        for(key = 0; key < list.length; key++){
          if (list[key].classList.contains('itemSelected')){
            selected = key + 1;
          }
        }
        if(selected < list.length){
          list[selected].parentElement.insertBefore(list[selected], list[selected - 1]);
        };
      };
});
addEventListener('dblclick', (event) => {
    if(event.target.classList.contains('itemSelected')){
        event.target.classList.toggle('completed');
    };
});


