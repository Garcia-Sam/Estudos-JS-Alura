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
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(2)
    }
}

titulo.addEventListener("click", function(){
    console.log("Olá! Eu sou uma função anônima.")
})

// function mostrarMensagem(){
//     console.log("Olá! Eu sou uma função nomeada")
// }

var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
   event.preventDefault()
   
   // Pegando valores do form
   var form = document.querySelector("#form-adiciona")

   var nome = form.nome.value
   var peso = form.peso.value
   var altura = form.altura.value
   var gordura = form.gordura.value
   
   var pacienteTr = document.createElement("tr")

   var nomeTd = document.createElement("td")
   var pesoTd = document.createElement("td")
   var alturaTd = document.createElement("td")
   var gorduraTd = document.createElement("td")
   var imcTd = document.createElement("td")

   nomeTd.textContent = nome
   pesoTd.textContent = peso
   alturaTd.textContent = altura
   gorduraTd.textContent = gordura
   imcTd.textContent = imc.toFixed(2)
   
   pacienteTr.appendChild(nomeTd)
   pacienteTr.appendChild(pesoTd)
   pacienteTr.appendChild(alturaTd)
   pacienteTr.appendChild(gorduraTd)
   pacienteTr.appendChild(imcTd)

   var tabela = document.querySelector("#tabela-pacientes")
   tabela.appendChild(pacienteTr)

})


console.log(botaoAdicionar)