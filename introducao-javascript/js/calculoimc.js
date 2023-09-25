var titulo = document.querySelector(".titulo");
titulo.textContent = ("Nutri Aparecida");

// Selecionador de paciente
var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i]

    // Selecionador de Peso
    var tdPeso = paciente.querySelector(".info-peso")
    var pesoValido = true
    var peso = tdPeso.textContent
    
    // Selecionador de Altura
    var tdAltura = paciente.querySelector(".info-altura")
    var alturaValida = true
    var altura = tdAltura.textContent
    
    // Alteração no valor do IMC direto na tabela
    var tdImc = paciente.querySelector(".info-imc")
    
    if (peso <= 0 || peso >= 1000){
        console.log("Peso Inválido!")
        pesoValido = false
        tdImc.textContent = "Peso Inválido!"
        paciente.classList.add("paciente-invalido")
    }
    
    if (altura <= 0 || altura >= 4.00){
        console.log("Altura Inválida!")
        alturaValida = false
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido")
    }
    
    if (pesoValido == false && alturaValida == false){
        console.log("Peso e Altura Inválidos!")
        tdImc.textContent = "Peso e Altura Inválidos!"
        paciente.classList.add("paciente-invalido")
    }
    
    // Calculo do IMC
    if (pesoValido && alturaValida){
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}

titulo.addEventListener("click", function(){
    console.log("Olá! Eu sou uma função anônima.")
})

// function mostrarMensagem(){
//     console.log("Olá! Eu sou uma função nomeada")
// }

function calculaImc(peso, altura){
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}
