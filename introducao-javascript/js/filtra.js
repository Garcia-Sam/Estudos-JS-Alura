var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    console.log(this.value) //this faz a função de campoFiltro.value o dono do evento
    var pacientes = document.querySelectorAll(".paciente")
    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i]
        var tdNome = paciente.querySelector(".info-nome")
        var nome = paciente.textContent
    }
})
