//criando botão

function createButton(task){
    const tarefas = document.querySelector('#criar-tarefa');
    let newButton = document.createElement('button');

    newButton.innerHTML = task;
    tarefas.appendChild(newButton);
};
createButton('Task');

    let texto = document.querySelector('#texto-tarefa');
    let clique = document.querySelector('#criar-tarefa');
    let orList = document.querySelector('#lista-tarefas');

    clique.addEventListener('click', function(){
        let elemento = document.createElement('li');
        elemento.innerText = texto.value;
        orList.appendChild(elemento);
        texto.value = '';
        elemento.addEventListener('click', function(){
            let cor = 'white';
            let bg = 'rgb(128,128,128)';
            let completeList = document.querySelectorAll('li');
            for(i = 0; i < completeList.length; i +=1){
                completeList[i].style.backgroundColor = cor;
            }
            elemento.style.backgroundColor = bg;
        })
            elemento.addEventListener('dblclick', function(){
                if(elemento.className == 'completed'){
                    elemento.className = '';
                }else{
                    elemento.className = 'completed';
                }
            })
    })
        
    function apagarBtn(Clear){
        const clearAll = document.querySelector('#apaga-tudo');
        let nButton = document.createElement('button');
        nButton.innerHTML = 'Clear';
        clearAll.appendChild(nButton);
            
    };
    apagarBtn('Clear');
    
    document.getElementById('apaga-tudo').addEventListener('click', function() {
        let item = document.querySelectorAll('li');
        for (let i = 0; i < item.length; i += 1) {
          document.getElementById('lista-tarefas').removeChild(item[i]);
        }
      });


    
      document.getElementById('remover-finalizados').addEventListener('click', function ()  {
        let object = document.querySelectorAll('.completed');
            for(i = 0; i < object.length; i +=1){
                document.getElementById('lista-tarefas').removeChild(object[i]);
            }
          
     });