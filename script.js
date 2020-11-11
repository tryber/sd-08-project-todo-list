const listaPai = document.querySelectorAll('#lista-tarefas');
const botaoAdd = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');



botaoAdd.addEventListener('click',function adicionarTarefas(){
    let tasks = document.createElement('li');
    tasks.innerText = input.value;
    listaPai[0].appendChild(tasks);
    input.value = '';
    tasks.className="lis"
});

const lista = document.getElementsByClassName('lis');
//deu certo
// for( let index = 0; index < listaPai.length; index +=1){
//     listaPai[index].addEventListener('click', function(event){
//         const target = event.target;
//         event.target.style.backgroundColor = 'rgb(128,128,128)';
        
//     })

// }

// quase la
// listaPai[0].addEventListener('click', function(event){
//     for(const key of lista){
//         event.target.classList.add('selected');
//     }
// });

listaPai[0].addEventListener('click', function(event){
    if(event.target.className === 'lis'){
        for(let index = 0; index < lista.length; index +=1){
            lista[index].className = 'lis'
        }
        event.target.className = 'lis selected'
    }
});



