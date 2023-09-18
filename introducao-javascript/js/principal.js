var titulo = document.querySelector(".titulo");
titulo.textContent = ("Nutri Aparecida");

// Selecionador de paciente
var paciente = document.querySelector("#primeiro-paciente")

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
}

if (altura <= 0 || altura >= 4.00){
    console.log("Altura Inválida!")
    alturaValida = false
    tdImc.textContent = "Altura Inválida"
}

if (pesoValido == false && alturaValida == false){
    console.log("Peso e Altura Inválidos!")
    tdImc.textContent = "Peso e Altura Inválidos!"
}

// Calculo do IMC
if (pesoValido && alturaValida){
    var imc = peso / (altura * altura)
    tdImc.textContent = imc
}

