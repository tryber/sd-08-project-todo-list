//Requisito 5
const pai = document.getElementById("lista-tarefas")
const texto = document.getElementById("texto-tarefa")
function botao() {
    const botao1 = document.getElementById("criar-tarefa");
    botao1.addEventListener("click", (event) => {
        const linha = document.createElement("li");
        pai.appendChild(linha);
        linha.innerText = texto.value;
        texto.value = "";

        //Colorindo de cinza
        linha.addEventListener("click", (event) => {
                const marcado = document.querySelector(".marcado");
                if (marcado !== null) {
                    marcado.classList.remove("marcado");
                }
                event.target.classList.add("marcado");
        })

        //Riscando texto
        linha.addEventListener("dblclick", (event) => {
            if (linha.className === "marcado") 
            event.target.classList.add("completed");
            else event.target.classList.remove("completed");
        })
    })
    
}
botao();

//equisito 10
 function apagar() {
    const botaoApaga = document.getElementById("apaga-tudo");
    botaoApaga.addEventListener("click", () => {
        const lista = document.querySelectorAll("li")
        for (let index = lista.length -1; index >= 0 ; index -= 1) {
            console.log(lista);
        lista[index].remove();
        }
    })
}
apagar();

//Requisito 11
    const botaoRemove = document.getElementById("remover-finalizados");

    botaoRemove.addEventListener("click", function () {
    const completeItem = document.querySelectorAll(".completed");
    for (let index = 0; index < completeItem.length; index++) {
        completeItem[index].remove();
    }
})


//Requisito 12
    let salvando = function() {
    const salvar = document.getElementById("salvar-tarefas");
    salvar.addEventListener("click", function() {
        let lista = document.getElementById("lista-tarefas").innerHTML;
        localStorage.setItem("lista", lista);
    })
    }
    salvando();
    






//rrequisito 14
const botaoRemover = document.getElementById("remover-selecionado");

    botaoRemover.addEventListener("click", function () {
    const completeItem = document.querySelectorAll(".marcado");
    for (let index = 0; index < completeItem.length; index++) {
        completeItem[index].remove();
    }
})