function createTask() {
    let input = document.querySelector('#texto-tarefa');
    let button = document.querySelector('#criar-tarefa');
    let list = document.querySelector('#lista-tarefas');
    button.addEventListener('click', function () {
        let newLi = document.createElement('li');
        newLi.innerText = input.value;
        newLi.className = 'task';
        list.appendChild(newLi);
        input.value = '';
        selecting();
    })
}

createTask();

function selecting() {
    let task = document.getElementsByClassName('task');
    for (let i in task) {
        task[i].addEventListener('click', function(event) {
            let selected = document.querySelector('.selected');
            if (selected !== null) {
                selected.className = 'task';
            }
            event.target.className = 'selected';
            completing();
        })
    }
} 

function completing() {
    let selected = document.querySelector('.selected')
    selected.addEventListener('click', function (event) {
        event.target.className = 'completed';
        notComplete();
    })
}

function notComplete() {
    let completed = document.getElementsByClassName('completed');
    for (let i in completed) {
        completed[i].addEventListener('dblclick', function (event) {
            event.target.className = 'task';       
        }) 
    } 
}    


// function selecting() {
//     let list = document.querySelector('#lista-tarefas')
//     list.addEventListener('click', function(event) {
//         let selected = document.querySelector('.selected');
//         if (selected !== null){
//             selected.classList.remove('selected');
//         }
//         if (event.target.className === 'task') {
//             event.target.classList.add('selected');
//         } 
//     }) 
// } 

// selecting();

// function completing() {
//     let list = document.querySelector('#lista-tarefas')
//     list.addEventListener('dblclick', function (event) {
//         if (event.target.className === 'completed') {
//             event.target.classList.remove('completed');
//         } else if (event.target.className === 'task') {
//             event.target.classList.add('completed');
//             event.target.classList.remove('selected');
//         }
//     })
// }

// completing();