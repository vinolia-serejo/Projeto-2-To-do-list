

let form = document.getElementById('formulario')
let entrada = document.getElementById('entrada')
let tarefas = document.getElementById('tarefas')
let selecionar = document.getElementById("selecionar")
let excluir = document.getElementById("excluir")
let dragging


form.addEventListener('submit', function (evento) {
    // evento.preventDefaul()  para a pagina n~~ao recarregar toda vez que clicamos no botão.
    evento.preventDefault()

    vazioEntrada = entrada.value.trim()


    if (vazioEntrada == '') {
        alert('Digite a tarefa valida')
        return
    } else {

    }

    // document.createElement cria um elemento dentro do html
    let diVazia = document.createElement("div")
    let lista = document.createElement("p")
    let deletar = document.createElement("span")


    diVazia.className = 'divTarefas'
    lista.innerHTML = (entrada.value)
    deletar.innerHTML = "X";

    deletar.style.cursor = 'pointer'


    lista.classList = "tarefas"

    // appendchild adiciona um elemento ao pai 
    tarefas.appendChild(diVazia)
    diVazia.appendChild(lista)
    diVazia.appendChild(deletar)

    //Inicio do comando de marcar individualmente
    lista.addEventListener('click', function (p) {

        if (lista.className == "checado") {
            lista.classList.remove('checado')
        } else {
            lista.className = 'checado'

        }

    })

    deletar.addEventListener('click', function () {
        diVazia.parentNode.removeChild(diVazia)


    })

    // esse comando limpa o campo do form quando passao o valor
    entrada.value = ""

    //Inicio do Drag and Drop
    diVazia.addEventListener('dragstart', function(ev){
        dragging = ev.target.closest('.divTarefas')

    })

    diVazia.addEventListener('dragover', function(ev){
        ev.preventDefault()
        const node = ev.target.closest('.divTarefas')
        this.parentNode.insertBefore(dragging, node)
    })

    diVazia.addEventListener('dragend', function(ev){
        dragging = null
    })


    //Botões Marcar/Desmarcar e Excluir 
    selecionar.addEventListener('click', function () {
         // ! 
        // contains
        //enquanto a minha classe não tiver 'checado' faça a função lista.className
        if (!lista.classList.contains('checado')) {
            lista.className = 'checado'
            selecionar.innerHTML = 'Desmarcar Tarefas'
        } else {
            lista.classList.remove('checado')
            selecionar.innerHTML = 'Selecionar Tarefas'

        }

    })


    excluir.addEventListener('click', function () {
        lista.parentNode.remove(lista)
    })

})





















// let noRemovido = tarefas.removeChild(interno)








// function tarefasConcluidas(checked) {
//     let tarefas= document.getElementById('checkbox');
//     if (checked != elm.checked) {
//       elm.click();
//     }
//   }















// form.addEventListener('submit', function(evento){
//     evento.preventDefault()

//     let resultadoSoma = document.createElement("p")

//     resultadoSoma.innerHTML = soma(parseInt(inputUm.value), parseInt(inputDois.value))

//     resultadoSoma.classList = "resultado"

//     resultado.appendChild(resultadoSoma)
//   })