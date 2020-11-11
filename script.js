const listaPai = document.querySelectorAll('#lista-tarefas');
const botaoAdd = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const lista = document.getElementsByClassName('.lis');


botaoAdd.addEventListener('click',function adicionarTarefas(){
    let tasks = document.createElement('li');
    tasks.innerText = input.value;
    listaPai[0].appendChild(tasks);
    input.value = '';
    tasks.className="lis"
});
console.log(lista);

for( let index = 0; index < listaPai.length; index +=1){
    listaPai[index].addEventListener('click', function(event){
        const target = event.target;
        event.target.style.backgroundColor = 'rgb(128,128,128)';
       
    })

}




// listaPai.addEventListener('click', function(event){
//     const target = event.target;
//     if(target.style.backgroundColor = 'rgb(128,128,128)'){
//         for(let i = 0; i < listaPai.length; i++){
//             listaPai[i].style.backgroundColor = 'rgb(128,128,128)'
//         }
//         target.style.backgroundColor = 'rgb(128,128,128)'
//     }else{
//         target.style.backgroundColor = 'white'
//     }
// })
