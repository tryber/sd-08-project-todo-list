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

            //linha.style.backgroundColor = "rgb(128, 128, 128)";
        })

        //Riscando texto
        linha.addEventListener("dblclick", (event) => {
            if (linha.className === "") 
            event.target.classList.add("completed");
            else event.target.classList.remove("completed");
        })
    })
    
}
botao();



