function newAssignment(){
    let text = document.querySelector('#texto-tarefa')
    let button = document.querySelector('#criar-tarefa');
    let createAssignment = document.querySelector('#lista-tarefas');
    button.addEventListener('click', () =>{
        if(text.value.length > 0){
            let assignment = document.createElement('li');
            assignment.innerText = text.value;
            assignment.className = "assignment";
            createAssignment.appendChild(assignment);
            document.querySelector('#texto-tarefa').value = '';
        }else{
            alert('Digite a tarefa')
        }
    });
}
newAssignment()
function changeBackgroundColor(){
    let assignmentList = document.getElementById('lista-tarefas');
    assignmentList.addEventListener('click', (event) =>{
        let list = document.querySelectorAll('li');
        for ( let a = 0; a < list.length; a+=1){
            list[a].style.backgroundColor = "white";
        }
        event.target.style.backgroundColor = "rgb(128,128,128)";
    })
}
changeBackgroundColor()
function crossedOutPhrase(){
    let itens = document.getElementById('lista-tarefas')
    itens.addEventListener('dblclick', ()=>{
        if(event.target.className == "completed"){
            event.target.className = '';
        }else{
            event.target.className = "completed"
        }
    });
}
crossedOutPhrase()
function clearAll(){
    let btnClear = document.getElementById('apaga-tudo');
    btnClear.addEventListener('click', ()=>{
       
        let list = document.querySelectorAll('li');
        for(let a = 0; a<list.length; a+=1){
            document.getElementById('lista-tarefas').removeChild(list[a]);
        }
    })
   
}
clearAll()
function btnFinished(){
    let clickFinished = document.getElementById('remover-finalizados');
    let finisheds = document.getElementsByClassName('completed');
    clickFinished.addEventListener('click', ()=>{
        let exerciseList = document.getElementById('lista-tarefas');
        for (let a = 0; a < finisheds.length; a+=1){
            exerciseList.removeChild(finisheds[a])
        }
    })
}
btnFinished()